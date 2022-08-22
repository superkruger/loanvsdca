import CagrButton from "./CagrButton"
import CagrInput from "./CagrInput"

export default function Cagr () {

	return (
		<>
			<td className="left">
				<span>Bitcoin CAGR</span>
			</td>
			<td className="right">
				<CagrButton amount={40}/>
				<CagrButton amount={80}/>
				<CagrButton amount={120}/>
				<CagrButton amount={160}/>
				<CagrInput/>
			</td>
		</>
	)
}