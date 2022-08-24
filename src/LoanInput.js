import {useContext, useState} from "react"
import {Col, Form, InputGroup} from 'react-bootstrap'
import clsx from "clsx"
import {LoanContext} from "./Context"

export default function LoanInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const [valid, setValid] = useState(true)
	const {loanAmount, setLoanAmount} = useContext(LoanContext)
	const cls = clsx({selectedinput: loanAmount === inputAmount})


	function handleInputChanged (event) {

		let value = event.target.value

		if (value == "") {
			value = "0"
		}

		if (value.match(/^[0-9]+$/) && event.target.checkValidity()) {
			event.preventDefault()
			event.stopPropagation()
			setLoanAmount(value)
			setInputAmount(value)
			setValid(true)
		} else {
			setValid(false)
		}
	}

	function handleInputClicked () {
		setLoanAmount(inputAmount)
	}

	return (
		<>
			<InputGroup hasValidation>
		        <InputGroup.Text>$</InputGroup.Text>
				{
					valid
					? <Form.Control className={cls} type="number" placeholder="or a custom loan amount" onKeyUp={handleInputChanged} onClick={handleInputClicked}/>
					: <Form.Control isInvalid className={cls} type="number" placeholder="or a custom loan amount" onKeyUp={handleInputChanged} onClick={handleInputClicked}/>
				}
		        <Form.Control.Feedback type="invalid">
	              Only numbers are allowed
	            </Form.Control.Feedback>
		    </InputGroup>
		</>
	)
}