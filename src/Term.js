import TermButton from "./TermButton"
import TermInput from "./TermInput"

export default function Term () {

	return (
		<>
			<td className="left">
				<span>Term</span>
			</td>
			<td className="right">
				<TermButton amount={5}/>
				<TermButton amount={12}/>
				<TermButton amount={15}/>
				<TermInput/>
			</td>
		</>
	)
}