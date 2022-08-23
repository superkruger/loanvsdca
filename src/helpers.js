let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
});

export function formatUSD(number) {
	return dollarUS.format(number)
}