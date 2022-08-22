import CagrButton from "./CagrButton"
import CagrInput from "./CagrInput"

export default function Cagr () {

	return (
		<>
			<td className="left">
				<span>Bitcoin CAGR</span>
			</td>
			<td className="right">
				<CagrButton amount={20}/>
				<CagrButton amount={40}/>
				<CagrButton amount={60}/>
				<CagrInput/>
			</td>
		</>
	)
}