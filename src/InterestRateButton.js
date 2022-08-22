import {useContext} from "react"
import clsx from "clsx"
import {InterestRateContext} from "./Context"

export default function InterestRateButton (props) {

	const {amount} = props
	const {interestRate, setInterestRate} = useContext(InterestRateContext)
	const cls = clsx({horizontalbutton: true, selected: interestRate === amount})

	function handleButtonClicked () {
		setInterestRate(amount)
	}

	return (
		<button className={cls} onClick={handleButtonClicked}>{amount}%</button>
	)
}