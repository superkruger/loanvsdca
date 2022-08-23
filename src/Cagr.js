import {Row, Col} from 'react-bootstrap'

import CagrButton from "./CagrButton"
import CagrInput from "./CagrInput"

export default function Cagr () {

	return (
		<>
			<Row>
				<Col sm={2} className="right">
					<h5>Bitcoin CAGR</h5>
				</Col>
				<CagrButton amount={40}/>
				<CagrButton amount={80}/>
				<CagrButton amount={120}/>
				<CagrButton amount={160}/>
				<CagrInput/>
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