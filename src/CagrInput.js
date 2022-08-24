import {useContext, useState} from "react"
import {Col, Form, InputGroup} from 'react-bootstrap'
import clsx from "clsx"
import {CagrContext} from "./Context"

export default function TermInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const [valid, setValid] = useState(true)
	const {cagr, setCagr} = useContext(CagrContext)
	const cls = clsx({selectedinput: cagr === inputAmount})


	function handleInputChanged (event) {
		event.preventDefault()

		let value = event.target.value

		if (value == "") {
			value = "0"
		}

		if (value.match(/^[0-9]+$/)) {
			setCagr(Number(value))
			setInputAmount(Number(value))
			setValid(true)
		} else {
			setValid(false)
		}
	}

	function handleInputClicked () {
		setCagr(inputAmount)
	}

	return (
		<>
			<InputGroup hasValidation>
				{
					valid
					? <Form.Control type="text" className={cls} placeholder="or a custom cagr" onChange={handleInputChanged} onClick={handleInputClicked}/>
					: <Form.Control isInvalid type="text" className={cls} placeholder="or a custom cagr" onChange={handleInputChanged} onClick={handleInputClicked}/>
				}
		        <InputGroup.Text>%</InputGroup.Text>
		        <Form.Control.Feedback type="invalid">
	              Only numbers are allowed
	            </Form.Control.Feedback>
		    </InputGroup>
		</>
	)
}