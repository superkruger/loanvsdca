import {Row, Col} from 'react-bootstrap'

import LoanButton from "./LoanButton"
import LoanInput from "./LoanInput"

export default function Loan () {

	return (
		<>
			<Row>
				<Col sm={2} className="right">
					<h5>Loan Amount</h5>
				</Col>
				<LoanButton amount={10000}/>
				<LoanButton amount={25000}/>
				<LoanButton amount={50000}/>
				<LoanButton amount={100000}/>
				<LoanInput/>
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