import {useContext, useState} from "react"
import {Col, Form, InputGroup} from 'react-bootstrap'
import clsx from "clsx"
import {InterestRateContext} from "./Context"

export default function LoanInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const [valid, setValid] = useState(true)
	const {interestRate, setInterestRate} = useContext(InterestRateContext)
	const cls = clsx({selectedinput: interestRate === inputAmount})


	function handleInputChanged (event) {
		event.preventDefault()

		let value = event.target.value

		if (value == "") {
			value = "0"
		}

		if (value.match(/^[0-9]+$/) && event.target.checkValidity()) {
			setInterestRate(value)
			setInputAmount(value)
			setValid(true)
		} else {
			setValid(false)
		}
	}

	function handleInputClicked () {
		setInterestRate(inputAmount)
	}

	return (
		<>
			<InputGroup hasValidation>
				{
					valid
					? <Form.Control className={cls} type="number" placeholder="or a custom interest rate" onKeyUp={handleInputChanged} onClick={handleInputClicked}/>
					: <Form.Control isInvalid className={cls} type="number" placeholder="or a custom interest rate" onKeyUp={handleInputChanged} onClick={handleInputClicked}/>
				}
		        <InputGroup.Text>%</InputGroup.Text>
		        <Form.Control.Feedback type="invalid">
	              Only numbers are allowed
	            </Form.Control.Feedback>
		    </InputGroup>
		</>
	)
}