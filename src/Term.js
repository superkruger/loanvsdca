import {Row, Col, Form} from 'react-bootstrap'

import TermButton from "./TermButton"
import TermInput from "./TermInput"

export default function Term () {

	return (
		<>
			<Row>
				<Col sm={2} className="right">
					<h4>Term</h4>
				</Col>
				<TermButton amount={5}/>
				<TermButton amount={6}/>
				<TermButton amount={7}/>
				<TermButton amount={8}/>
				<TermInput/>
			</Row>
			<Row>
				<Col sm={2}>
				</Col>
				<Col sm={10}>
					<p>
					
					</p>
				</Col>
			</Row>
		</>
	)
}