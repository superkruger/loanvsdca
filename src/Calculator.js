import {useState} from "react"
import Principal from "./Principal"
import InterestRate from "./InterestRate"
import Term from "./Term"
import {PrincipalContext, InterestRateContext, TermContext} from "./Context"


export default function Calculator () {
	const [loanAmount, setLoanAmount] = useState(0)
	const [interestRate, setInterestRate] = useState(0)
	const [term, setTerm] = useState(0)

	const btcPrice = 20000
	const btcCagr = 50
	let repayment = 0
	let dcaBtcAmount = 0

	function calculateDCA(payment) {

		const yearlyLoanCost = payment * 12
		let cagrBtcPrice = btcPrice
		let btcAmount = 0

		for (let year = 0; year < term; ++year) {
			btcAmount = btcAmount + (yearlyLoanCost / cagrBtcPrice)
			cagrBtcPrice = cagrBtcPrice * (1 + (btcCagr / 100))
		}

		dcaBtcAmount = btcAmount.toFixed(2)
	}

	function calculateRepayment() {

		if (!loanAmount || !interestRate || !term) {
			return
		}

		const periods = term * 12
		const interestRatePerPeriod = interestRate / 12 / 100
		const payment = (loanAmount * (interestRatePerPeriod / (1 - Math.pow(1 + interestRatePerPeriod, -periods)))).toFixed(2);

		repayment = payment
		calculateDCA(payment)
	}

	calculateRepayment()

	return (
		<>
			<PrincipalContext.Provider value={{loanAmount, setLoanAmount}}>
				<Principal />
			</PrincipalContext.Provider>
			<InterestRateContext.Provider value={{interestRate, setInterestRate}}>
				<InterestRate />
			</InterestRateContext.Provider>
			<TermContext.Provider value={{term, setTerm}}>
				<Term />
			</TermContext.Provider>
			<p>Loan Amount: ${loanAmount}</p>
			<p>Interest Rate: {interestRate}%</p>
			<p>Term: {term} years</p>
			<p>Monthly repayment: ${repayment}</p>
			<p>Total loan cost: ${(repayment * term * 12).toFixed(2)}</p>
			<p>BTC amount with loan: {(loanAmount / btcPrice).toFixed(2)}</p>
			<p>BTC amount with DCA: {dcaBtcAmount}</p>
			<p>Loan yield over DCA: {(((loanAmount / btcPrice) / dcaBtcAmount)).toFixed(2)}</p>
		</>
	)
}