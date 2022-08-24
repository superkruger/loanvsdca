import {useContext} from "react"
import {Col, Button} from 'react-bootstrap'
import clsx from "clsx"
import {CagrContext} from "./Context"

export default function CagrButton (props) {

	const {amount} = props
	const {cagr, setCagr} = useContext(CagrContext)

	function handleButtonClicked () {
		setCagr(amount)
	}

	return (
		<>
			{cagr === amount
				? <Button variant="outline-primary" size="sm" onClick={handleButtonClicked} active>{amount}%</Button>
				: <Button variant="outline-primary" size="sm" onClick={handleButtonClicked}>{amount}%</Button>
			}
		</>
	)
}