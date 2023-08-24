export const isObjectEmpty = (
	object: Record<string | number | symbol, unknown>
) => {
	return Object.keys(object).length === 0;
};
