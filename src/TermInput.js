import {useContext, useState} from "react"
import {Col, Form} from 'react-bootstrap'
import clsx from "clsx"
import {TermContext} from "./Context"

export default function TermInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const {term, setTerm} = useContext(TermContext)
	const cls = clsx({horizontalinput: false, selected: term === inputAmount})


	function handleInputChanged (event) {
		event.preventDefault()

		let value = event.target.value

		if (value == "") {
			value = "0"
		}

		if (value.match(/^[0-9]+$/)) {
			setTerm(value)
			setInputAmount(value)
		}
	}

	function handleInputClicked () {
		setTerm(inputAmount)
	}

	return (
		<Col sm={2}>
			<Form.Control type="text" placeholder="Custom Term" onChange={handleInputChanged} onClick={handleInputClicked}/>
		</Col>
	)
}