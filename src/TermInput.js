import {useContext, useState} from "react"
import {Col, Form, InputGroup} from 'react-bootstrap'
import clsx from "clsx"
import {TermContext} from "./Context"

export default function TermInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const [valid, setValid] = useState(true)
	const {term, setTerm} = useContext(TermContext)
	const cls = clsx({selectedinput: term === inputAmount})


	function handleInputChanged (event) {
		event.preventDefault()

		let value = event.target.value

		if (value == "") {
			value = "0"
		}

		if (value.match(/^[0-9]+$/)) {
			setTerm(value)
			setInputAmount(value)
			setValid(true)
		} else {
			setValid(false)
		}
	}

	function handleInputClicked () {
		setTerm(inputAmount)
	}

	return (
		<>
			<InputGroup hasValidation>
				{
					valid
					? <Form.Control className={cls} type="number" placeholder="or a custom term" onChange={handleInputChanged} onClick={handleInputClicked}/>
					: <Form.Control isInvalid className={cls} type="number" placeholder="or a custom term" onChange={handleInputChanged} onClick={handleInputClicked}/>
				}
		        <InputGroup.Text>yrs</InputGroup.Text>
		        <Form.Control.Feedback type="invalid">
	              Only numbers are allowed
	            </Form.Control.Feedback>
		    </InputGroup>
		</>
	)
}