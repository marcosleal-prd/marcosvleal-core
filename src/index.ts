export const stringTransform = {
	toLowercase: (str: string): string => {
		return str.toLocaleLowerCase();
	},
	toUppercase: (str: string): string => {
		return str.toLocaleUpperCase();
	},
	toCapitalize: (str: string): string => {
		return str.toLocaleLowerCase().replace(/(?:^|\s)\S/g, (a: string) => a.toUpperCase());
	}
};
