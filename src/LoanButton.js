import {useContext} from "react"
import {Col, Button} from 'react-bootstrap'
import clsx from "clsx"
import {LoanContext} from "./Context"

import {formatUSD} from "./helpers"

export default function LoanButton (props) {

	const {amount} = props
	const {loanAmount, setLoanAmount} = useContext(LoanContext)

	let displayAmount = amount / 1000

	function handleButtonClicked () {
		setLoanAmount(amount)
	}

	return (
		<>
			{loanAmount === amount
				? <Button variant="outline-primary" size="sm" onClick={handleButtonClicked} active>{formatUSD(displayAmount)}K</Button>
				: <Button variant="outline-primary" size="sm" onClick={handleButtonClicked}>{formatUSD(displayAmount)}K</Button>
			}
		</>
	)
}