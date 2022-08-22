import {useContext, useState} from "react"
import clsx from "clsx"
import {CagrContext} from "./Context"

export default function TermInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const {cagr, setCagr} = useContext(CagrContext)
	const cls = clsx({horizontalinput: true, selected: cagr === inputAmount})


	function handleInputChanged (event) {
		setCagr(event.target.value)
		setInputAmount(event.target.value)
	}

	function handleInputClicked () {
		setCagr(inputAmount)
	}

	return (
		<input type="text" placeholder="Custom CAGR" className={cls} onChange={handleInputChanged} onClick={handleInputClicked}/>
	)
}