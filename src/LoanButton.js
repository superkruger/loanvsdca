import {useContext} from "react"
import clsx from "clsx"
import {PrincipalContext} from "./Context"

export default function LoanButton (props) {

	const {amount} = props
	const {loanAmount, setLoanAmount} = useContext(PrincipalContext)
	const cls = clsx({horizontal: true, selected: loanAmount === amount})

	function handleButtonClicked () {
		setLoanAmount(amount)
	}

	return (
		<button className={cls} onClick={handleButtonClicked}>${amount}</button>
	)
}