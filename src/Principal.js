import LoanButton from "./LoanButton"

export default function Principal () {

	return (

		<div className="relative">
			<p>
				<LoanButton amount={10000}/>
				<LoanButton amount={20000}/>
				<LoanButton amount={50000}/>
			</p>
		</div>
	)
}