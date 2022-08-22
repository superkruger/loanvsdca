import {useContext, useState} from "react"
import clsx from "clsx"
import {CagrContext} from "./Context"

export default function TermInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const {cagr, setCagr} = useContext(CagrContext)
	const cls = clsx({horizontalinput: true, selected: cagr === inputAmount})


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
		<input type="text" placeholder="Custom CAGR" className={cls} onChange={handleInputChanged} onClick={handleInputClicked}/>
	)
}