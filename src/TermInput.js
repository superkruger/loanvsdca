import {useContext, useState} from "react"
import clsx from "clsx"
import {TermContext} from "./Context"

export default function TermInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const {term, setTerm} = useContext(TermContext)
	const cls = clsx({horizontalinput: true, selected: term === inputAmount})


	function handleInputChanged (event) {
		setTerm(event.target.value)
		setInputAmount(event.target.value)
	}

	function handleInputClicked () {
		setTerm(inputAmount)
	}

	return (
		<input type="text" placeholder="Custom Term" className={cls} onChange={handleInputChanged} onClick={handleInputClicked}/>
	)
}