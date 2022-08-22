import {useContext, useState} from "react"
import clsx from "clsx"
import {TermContext} from "./Context"

export default function TermInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const {term, setTerm} = useContext(TermContext)
	const cls = clsx({horizontalinput: true, selected: term === inputAmount})


	function handleInputChanged (event) {
		event.preventDefault()

		let value = event.target.value


		if (value.match(/^[0-9]+$/)) {
			setTerm(value)
			setInputAmount(value)
		}
	}

	function handleInputClicked () {
		setTerm(inputAmount)
	}

	return (
		<input type="text" placeholder="Custom Term" className={cls} onChange={handleInputChanged} onClick={handleInputClicked}/>
	)
}