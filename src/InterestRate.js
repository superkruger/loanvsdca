import {Row, Col} from 'react-bootstrap'

import InterestRateButton from "./InterestRateButton"
import InterestRateInput from "./InterestRateInput"

export default function InterestRate () {

	return (
		<>
			<Row>
				<Col sm={2} className="right">
					<h5>Interest Rate</h5>
				</Col>
				<InterestRateButton amount={6}/>
				<InterestRateButton amount={9}/>
				<InterestRateButton amount={12}/>
				<InterestRateButton amount={15}/>
				<InterestRateInput/>
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