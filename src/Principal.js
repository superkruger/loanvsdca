import LoanButton from "./LoanButton"
import LoanInput from "./LoanInput"

export default function Principal () {

	return (

		<>
			<td className="left">
				<span>Loan Amount</span>
			</td>
			<td className="right">
				<LoanButton amount={10000}/>
				<LoanButton amount={20000}/>
				<LoanButton amount={50000}/>
				<LoanInput/>
			</td>
		</>
	)
}