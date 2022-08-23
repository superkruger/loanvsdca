import {useContext, useState} from "react"
import {Col, Form} from 'react-bootstrap'
import clsx from "clsx"
import {LoanContext} from "./Context"

export default function LoanInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const {loanAmount, setLoanAmount} = useContext(LoanContext)
	const cls = clsx({horizontalinput: true, selected: loanAmount === inputAmount})


	function handleInputChanged (event) {
		event.preventDefault()

		let value = event.target.value

		if (value == "") {
			value = "0"
		}

		if (value.match(/^[0-9]+$/)) {
			setLoanAmount(value)
			setInputAmount(value)
		}	
	}

	function handleInputClicked () {
		setLoanAmount(inputAmount)
	}

	return (
		<Col sm={2}>
			<Form.Control type="text" placeholder="Custom Amount" onChange={handleInputChanged} onClick={handleInputClicked}/>
		</Col>
	)
}