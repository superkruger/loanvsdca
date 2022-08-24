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
		<>
			{interestRate === amount
				? <Button variant="outline-primary" size="sm" onClick={handleButtonClicked} active>{amount}%</Button>
				: <Button variant="outline-primary" size="sm" onClick={handleButtonClicked}>{amount}%</Button>
			}
		</>
	)
}