import {useContext, useState} from "react"
import {Col, Form} from 'react-bootstrap'
import clsx from "clsx"
import {InterestRateContext} from "./Context"

export default function LoanInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const {interestRate, setInterestRate} = useContext(InterestRateContext)
	const cls = clsx({horizontalinput: true, selected: interestRate === inputAmount})


	function handleInputChanged (event) {
		event.preventDefault()

		let value = event.target.value

		if (value == "") {
			value = "0"
		}

		if (value.match(/^[0-9]+$/)) {
			setInterestRate(value)
			setInputAmount(value)
		}
	}

	function handleInputClicked () {
		setInterestRate(inputAmount)
	}

	return (
		<Col sm={2}>
			<Form.Control type="text" placeholder="Custom Rate" onChange={handleInputChanged} onClick={handleInputClicked}/>
		</Col>
	)
}