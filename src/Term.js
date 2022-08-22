import TermButton from "./TermButton"

export default function Term () {

	return (
		<div className="relative">
			<p>
				<TermButton amount={5}/>
				<TermButton amount={12}/>
				<TermButton amount={15}/>
			</p>
		</div>
	)
}