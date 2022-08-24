import {Row, Col, ButtonGroup} from 'react-bootstrap'

import TermButton from "./TermButton"
import TermInput from "./TermInput"

export default function Term () {

	const text = document.getElementById('calc_term_text');

	return (
		<>
			<Row>
				<Col className="left">
					Term
				</Col>
				<Col sm={10}>
					<p className="text-muted left">
						{text.innerHTML}
					</p>
				</Col>
			</Row>
			<Row>
				<Col sm={12}>
					&nbsp;
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
				</Col>
				<Col sm={10} className="left">
					<ButtonGroup size="sm" className="mb-2">
						<TermButton amount={5}/>
						<TermButton amount={6}/>
						<TermButton amount={7}/>
						<TermButton amount={8}/>
					</ButtonGroup>
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
				</Col>
				<Col sm={10} className="left">
					<TermInput/>
				</Col>
			</Row>
			<Row>
				<Col sm={12}>
					&nbsp;
				</Col>
			</Row>
		</>
	)
}