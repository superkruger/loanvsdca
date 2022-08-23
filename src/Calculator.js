import {useState, useEffect} from "react"
import clsx from "clsx"
import {Container, Row, Col, Form} from 'react-bootstrap'

import Loan from "./Loan"
import InterestRate from "./InterestRate"
import Term from "./Term"
import Cagr from "./Cagr"
import {LoanContext, InterestRateContext, TermContext, CagrContext} from "./Context"

import {formatUSD} from "./helpers"

const LOANCOST = 1.0615

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

		if (!loanAmount || !interestRate || !term || !cagr || cagr == 0) {
			return
		}

		let loanWithCost = loanAmount * LOANCOST

		const periods = term * 12
		const interestRatePerPeriod = interestRate / 12 / 100
		const payment = (loanWithCost * (interestRatePerPeriod / (1 - Math.pow(1 + interestRatePerPeriod, -periods)))).toFixed(2);

		repayment = payment
		calculateDCA(payment)
	}

	calculateRepayment()

	return (
		<>
			<Form>
			<Container>
			
			<LoanContext.Provider value={{loanAmount, setLoanAmount}}>
				<Loan />
			</LoanContext.Provider>
		
			<InterestRateContext.Provider value={{interestRate, setInterestRate}}>
				<InterestRate />
			</InterestRateContext.Provider>
		
			<TermContext.Provider value={{term, setTerm}}>
				<Term />
			</TermContext.Provider>
		
			<CagrContext.Provider value={{cagr, setCagr}}>
				<Cagr />
			</CagrContext.Provider>
			
			</Container>
			</Form>
			<p>BTC Price: {formatUSD(btcPrice)}</p>

			{!loanAmount || !interestRate || !term || !cagr || cagr == 0 || isNaN(differential) || !(typeof differential === 'number') || !Number.isFinite(differential)
				? <></>
				: <>
					<p>Monthly repayment: {formatUSD(repayment)}</p>
					<p>Total loan cost: {formatUSD(repayment * term * 12)}</p>
					<h5>BTC amount with loan: {(loanAmount / btcPrice).toFixed(2)}</h5>
					<h5>BTC amount with DCA: {dcaBtcAmount}</h5>
					<h5>Loan yield over DCA: <span className={differentialClass}>{((differential * 100)-100).toFixed(2)}%</span></h5>
				  </>
			}
			
		</>
	)
}