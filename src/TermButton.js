import {useContext} from "react"
import {Col, Button} from 'react-bootstrap'
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
		<>
			{term === amount
				? <Button variant="outline-primary" size="sm" onClick={handleButtonClicked} active>{amount} yrs</Button>
				: <Button variant="outline-primary" size="sm" onClick={handleButtonClicked}>{amount} yrs</Button>

			}
		</>
	)
}