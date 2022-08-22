import {useContext} from "react"
import clsx from "clsx"
import {TermContext} from "./Context"

export default function TermButton (props) {

	const {amount} = props
	const {term, setTerm} = useContext(TermContext)
	const cls = clsx({horizontalbutton: true, selected: term === amount})

	function handleButtonClicked () {
		setTerm(amount)
	}

	return (
		<button className={cls} onClick={handleButtonClicked}>{amount} years</button>
	)
}