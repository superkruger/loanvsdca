import {useState, useEffect} from "react"
import clsx from "clsx"
import Principal from "./Principal"
import InterestRate from "./InterestRate"
import Term from "./Term"
import Cagr from "./Cagr"
import {PrincipalContext, InterestRateContext, TermContext, CagrContext} from "./Context"


export default function Calculator () {
	const [error, setError] = useState(null);
  	const [isLoaded, setIsLoaded] = useState(false);
  	const [btcPrice, setBtcPrice] = useState(20000);

	const [loanAmount, setLoanAmount] = useState(0)
	const [interestRate, setInterestRate] = useState(0)
	const [term, setTerm] = useState(0)
	const [cagr, setCagr] = useState(0)

	let repayment = 0
	let dcaBtcAmount = 0
	let differential = 0
	let differentialClass = clsx({green: differential >= 1, red: differential < 1})

	useEffect(() => {
	    fetch("https://blockchain.info/ticker")
	      .then(res => res.json())
	      .then(
	        (result) => {
	          setIsLoaded(true);
	          setBtcPrice(result.USD.last);
	        },
	        (error) => {
	          setIsLoaded(true);
	          setError(error);
	          alert(error)
	        }
	      )
	  }, [])

	function calculateDCA(payment) {

		const yearlyLoanCost = payment * 12
		let cagrBtcPrice = btcPrice
		let btcAmount = 0

		for (let year = 0; year < term; ++year) {
			btcAmount = btcAmount + (yearlyLoanCost / cagrBtcPrice)
			cagrBtcPrice = cagrBtcPrice * (1 + (cagr / 100))
		}

		dcaBtcAmount = btcAmount.toFixed(2)

		differential = (((loanAmount / btcPrice) / dcaBtcAmount))
		differentialClass = clsx({green: differential >= 1, red: differential < 1})
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
			<table className="column">
			<tbody>
			<tr>
			<PrincipalContext.Provider value={{loanAmount, setLoanAmount}}>
				<Principal />
			</PrincipalContext.Provider>
			</tr>
			<tr>
			<InterestRateContext.Provider value={{interestRate, setInterestRate}}>
				<InterestRate />
			</InterestRateContext.Provider>
			</tr>
			<tr>
			<TermContext.Provider value={{term, setTerm}}>
				<Term />
			</TermContext.Provider>
			</tr>
			<tr>
			<CagrContext.Provider value={{cagr, setCagr}}>
				<Cagr />
			</CagrContext.Provider>
			</tr>
			</tbody>
			</table>
			<p>BTC Price: ${btcPrice}</p>
			{/*<p>Loan Amount: ${loanAmount}</p>
			<p>Interest Rate: {interestRate}%</p>
			<p>Term: {term} years</p>*/}

			{!loanAmount || !interestRate || !term || isNaN(differential) || !(typeof differential === 'number') || !Number.isFinite(differential)
				? <></>
				: <>
					<p>Monthly repayment: ${repayment}</p>
					<p>Total loan cost: ${(repayment * term * 12).toFixed(2)}</p>
					<p>BTC amount with loan: {(loanAmount / btcPrice).toFixed(2)}</p>
					<p>BTC amount with DCA: {dcaBtcAmount}</p>
					<p>Loan yield over DCA: <span className={differentialClass}>{((differential * 100)-100).toFixed(2)}%</span></p>
				  </>
			}
			
		</>
	)
}