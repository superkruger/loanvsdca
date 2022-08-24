import {Row, Col, ButtonGroup} from 'react-bootstrap'

import LoanButton from "./LoanButton"
import LoanInput from "./LoanInput"

export default function Loan () {

	const text = document.getElementById('calc_loan_text');

	return (
		<>
			<Row>
				<Col className="left">
					Loan Amount
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
						<LoanButton amount={10000}/>
						<LoanButton amount={25000}/>
						<LoanButton amount={50000}/>
						<LoanButton amount={100000}/>
					</ButtonGroup>
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
				</Col>
				<Col sm={10} className="left">
					<LoanInput/>
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