import {useContext, useState} from "react"
import clsx from "clsx"
import {InterestRateContext} from "./Context"

export default function LoanInput (props) {

	const [inputAmount, setInputAmount] = useState(0)
	const {interestRate, setInterestRate} = useContext(InterestRateContext)
	const cls = clsx({horizontalinput: true, selected: interestRate === inputAmount})


	function handleInputChanged (event) {
		setInterestRate(event.target.value)
		setInputAmount(event.target.value)
	}

	function handleInputClicked () {
		setInterestRate(inputAmount)
	}

	return (
		<input type="text" placeholder="Custom Rate" className={cls} onChange={handleInputChanged} onClick={handleInputClicked}/>
	)
}