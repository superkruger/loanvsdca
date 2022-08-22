import {useContext} from "react"
import clsx from "clsx"
import {CagrContext} from "./Context"

export default function CagrButton (props) {

	const {amount} = props
	const {cagr, setCagr} = useContext(CagrContext)
	const cls = clsx({horizontalbutton: true, selected: cagr === amount})

	function handleButtonClicked () {
		setCagr(amount)
	}

	return (
		<button className={cls} onClick={handleButtonClicked}>{amount}%</button>
	)
}