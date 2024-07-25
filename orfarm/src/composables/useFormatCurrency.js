export const useFormatCurrency = (value) => {
	return Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	}).format(value);
};
