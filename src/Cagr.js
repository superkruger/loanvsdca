import {Row, Col, ButtonGroup} from 'react-bootstrap'

import CagrButton from "./CagrButton"
import CagrInput from "./CagrInput"

export default function Cagr () {

	const text = document.getElementById('calc_cagr_text');

	return (
		<>

			<Row>
				<Col className="left">
					Bitcoin CAGR
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
						<CagrButton amount={40}/>
						<CagrButton amount={80}/>
						<CagrButton amount={120}/>
						<CagrButton amount={160}/>
					</ButtonGroup>
				</Col>
			</Row>
			<Row>
				<Col sm={2}>
				</Col>
				<Col sm={10} className="left">
					<CagrInput/>
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