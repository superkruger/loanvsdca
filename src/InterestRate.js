import {Row, Col, ButtonGroup} from 'react-bootstrap'

import InterestRateButton from "./InterestRateButton"
import InterestRateInput from "./InterestRateInput"

export default function InterestRate () {

	const text = document.getElementById('calc_interestrate_text');

	return (
		<>
			<Row>
				<Col className="left">
					Interest Rate
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
						<InterestRateButton amount={6}/>
						<InterestRateButton amount={9}/>
						<InterestRateButton amount={12}/>
						<InterestRateButton amount={15}/>
					</ButtonGroup>
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
				</Col>
				<Col sm={10} className="left">
					<InterestRateInput/>
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