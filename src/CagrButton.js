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
		<Col sm={2}>
			{cagr === amount
				? <Button variant="outline-primary" size="lg" onClick={handleButtonClicked} active>{amount}%</Button>
				: <Button variant="outline-primary" size="lg" onClick={handleButtonClicked}>{amount}%</Button>
			}
		</Col>
	)
}