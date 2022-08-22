import InterestRateButton from "./InterestRateButton"
import InterestRateInput from "./InterestRateInput"

export default function InterestRate () {

	return (
		<>
			<td className="left">
				<span>Interest Rate</span>
			</td>
			<td className="right">
				<InterestRateButton amount={6}/>
				<InterestRateButton amount={9}/>
				<InterestRateButton amount={12}/>
				<InterestRateButton amount={15}/>
				<InterestRateInput/>
			</td>
		</>
	)
}