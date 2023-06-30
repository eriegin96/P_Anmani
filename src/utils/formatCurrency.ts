export const formatCurrency = (price: number | undefined) => {
	if (!price) return "0 VNĐ";

	const result =
		// Nine Zeroes for Billions
		Math.abs(price) >= 1.0e9
			? Math.abs(price) / 1.0e9 + " tỉ"
			: // Six Zeroes for Millions
			Math.abs(price) >= 1.0e6
			? Math.abs(price) / 1.0e6 + " triệu"
			: // Three Zeroes for Thousands
			Math.abs(price) >= 1.0e3
			? Math.abs(price) / 1.0e3 + " nghìn"
			: Math.abs(price);

	return `${result} VNĐ`;
};
