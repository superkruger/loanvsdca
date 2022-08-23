import {useContext} from "react"
import {Col, Button} from 'react-bootstrap'
import clsx from "clsx"
import {LoanContext} from "./Context"

export default function LoanButton (props) {

	const {amount} = props
	const {loanAmount, setLoanAmount} = useContext(LoanContext)

	function handleButtonClicked () {
		setLoanAmount(amount)
	}

	return (
		<Col sm={2}>
			{loanAmount === amount
				? <Button variant="outline-primary" size="lg" onClick={handleButtonClicked} active>${amount}</Button>
				: <Button variant="outline-primary" size="lg" onClick={handleButtonClicked}>${amount}</Button>
			}
		</Col>
	)
}