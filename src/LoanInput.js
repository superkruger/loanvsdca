import {useContext, useState} from "react"
import clsx from "clsx"
import {PrincipalContext} from "./Context"

export default function LoanInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const {loanAmount, setLoanAmount} = useContext(PrincipalContext)
	const cls = clsx({horizontalinput: true, selected: loanAmount === inputAmount})


	function handleInputChanged (event) {
		event.preventDefault()

		let value = event.target.value


		if (value.match(/^[0-9]+$/)) {
			setLoanAmount(value)
			setInputAmount(value)
		}	
	}

	function handleInputClicked () {
		setLoanAmount(inputAmount)
	}

	return (
		<input type="text" placeholder="Custom Amount" className={cls} onChange={handleInputChanged} onClick={handleInputClicked}/>
	)
}