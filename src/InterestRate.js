import InterestRateButton from "./InterestRateButton"

export default function InterestRate () {

	return (
		<div className="relative">
			<p>
				<InterestRateButton amount={7.5}/>
				<InterestRateButton amount={12}/>
				<InterestRateButton amount={15}/>
			</p>
		</div>
	)
}