import {useContext} from "react"
import {Col, Button} from 'react-bootstrap'
import clsx from "clsx"
import {InterestRateContext} from "./Context"

export default function InterestRateButton (props) {

	const {amount} = props
	const {interestRate, setInterestRate} = useContext(InterestRateContext)

	function handleButtonClicked () {
		setInterestRate(amount)
	}

	return (
		<Col sm={2}>
			{interestRate === amount
				? <Button variant="outline-primary" size="lg" onClick={handleButtonClicked} active>{amount}%</Button>
				: <Button variant="outline-primary" size="lg" onClick={handleButtonClicked}>{amount}%</Button>
			}
		</Col>
	)
}