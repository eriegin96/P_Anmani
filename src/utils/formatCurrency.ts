export const formatCurrency = (
	price: number | undefined,
	noUnit: boolean = false,
	toFixed: boolean = false
) => {
	if (!price) return noUnit ? "0" : `0 VNĐ`;

	const result =
		// Nine Zeroes for Billions
		Math.abs(price) >= 1.0e9
			? (Math.abs(price) / 1.0e9).toFixed(toFixed ? 2 : 0) + " tỷ"
			: // Six Zeroes for Millions
			Math.abs(price) >= 1.0e6
			? (Math.abs(price) / 1.0e6).toFixed(toFixed ? 2 : 0) + " triệu"
			: // Three Zeroes for Thousands
			Math.abs(price) >= 1.0e3
			? (Math.abs(price) / 1.0e3).toFixed(toFixed ? 2 : 0) + " nghìn"
			: Math.abs(price);

	return noUnit ? `${result}` : `${result} VNĐ`;
};
