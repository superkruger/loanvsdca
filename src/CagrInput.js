import {useContext, useState} from "react"
import {Col, Form} from 'react-bootstrap'
import clsx from "clsx"
import {CagrContext} from "./Context"

export default function TermInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const {cagr, setCagr} = useContext(CagrContext)
	const cls = clsx({horizontalinput: false, selected: cagr === inputAmount})


	function handleInputChanged (event) {
		event.preventDefault()

		let value = event.target.value


		if (value.match(/^[0-9]+$/)) {
			setCagr(value)
			setInputAmount(value)
		}
	}

	function handleInputClicked () {
		setCagr(inputAmount)
	}

	return (
		<Col sm={2}>
			<Form.Control type="text" className={cls} placeholder="Custom CAGR" onChange={handleInputChanged} onClick={handleInputClicked}/>
		</Col>
	)
}