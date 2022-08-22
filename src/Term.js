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
				<TermButton amount={6}/>
				<TermButton amount={7}/>
				<TermButton amount={8}/>
				<TermInput/>
			</td>
		</>
	)
}