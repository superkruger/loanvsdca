import {useState, useEffect} from "react"
import clsx from "clsx"
import {Card, Container, Row, Col, Form, Table} from 'react-bootstrap'

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
	let projectedBtcPrice = 0
	let inValidCalculation = true

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
		projectedBtcPrice = btcPrice

		for (let year = 0; year < term; ++year) {
			btcAmount = btcAmount + (yearlyLoanCost / cagrBtcPrice)
			cagrBtcPrice = cagrBtcPrice * (1 + (cagr / 100))
			projectedBtcPrice = projectedBtcPrice * (1 + (cagr / 100))
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

		inValidCalculation = !loanAmount || !interestRate || !term || !cagr || cagr == 0 || isNaN(differential) || !(typeof differential === 'number') || !Number.isFinite(differential)
	}

	calculateRepayment()

	return (
		<div className="calculator">
			<Form>
				<Card bg="warning">
				<Card.Header>
					<Container>

						<Row>
							<Col sm={2}/>
							<Col sm={10} className="left">
								<table width="100%"><tbody>
								<tr>
									<th style={{width:"60%"}}></th>
								</tr>
								<tr>
									<td><h4>Current BTC Price:</h4></td>
									<td><h4>{formatUSD(btcPrice)}</h4></td>
								</tr>
								</tbody></table>
							</Col>
						</Row>
					</Container>
				</Card.Header>
				<Card.Body>
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
		      </Card.Body>
				
				</Card>
			</Form>
			<br/>

			<Card bg="warning">
			<Card.Body>

			<Container>
				

					<Row>
						<Col sm={12} className="left">

							<Table striped bordered hover>
						      <tbody>
						        <tr>
						          	<td><h6>Monthly repayment:</h6></td>
									<td><h6>
									{
										inValidCalculation
										? ""
										: formatUSD(repayment)
									}
									</h6></td>
						        </tr>
						        <tr>
						          	<td><h6>Total loan cost:</h6></td>
									<td><h6>
									{
										inValidCalculation
										? ""
										: formatUSD(repayment * term * 12)
									}
									</h6></td>
						        </tr>
						        <tr>
						          	<td><h6>Projected BTC price in {term} years:</h6></td>
									<td><h6>
									{
										inValidCalculation
										? ""
										: formatUSD(projectedBtcPrice)
									}
									</h6></td>
						        </tr>
						        <tr>
									<td><h6>BTC amount with loan:</h6></td>
									<td><h6>
									{
										inValidCalculation
										? ""
										: (loanAmount / btcPrice).toFixed(2)
									}
									</h6></td>
								</tr>
								<tr>
									<td><h6>BTC amount with DCA:</h6></td>
									<td><h6>
									{
										inValidCalculation
										? ""
										: dcaBtcAmount
									}
									</h6></td>
								</tr>
								<tr>
									<td><h6>Loan yield over DCA:</h6></td>
									<td><h6>
									{
										inValidCalculation
										? ""
										: <span className={differentialClass}>{((differential * 100)-100).toFixed(2)}%</span>
									}
									</h6></td>
								</tr>
						      </tbody>
						    </Table>
						</Col>
					</Row>
			</Container>
			</Card.Body>
			</Card>
		</div>
	)
}