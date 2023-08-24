export const parseURLSearchParams = (search: string): Record<string, any> => {
	return JSON.parse(
		'{"' +
			decodeURI(search)
				.replace(/"/g, '\\"')
				.replace(/&/g, '","')
				.replace(/=/g, '":"') +
			'"}'
	);
};
