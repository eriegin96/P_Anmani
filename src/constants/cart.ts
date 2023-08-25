export const CART_STATUS = {
	PENDING: "pending",
	PROCESSING: "processing",
	COMPLETED: "completed",
} as const;

export type TCartStatusKey = keyof typeof CART_STATUS;
export type TCartStatusValue = (typeof CART_STATUS)[TCartStatusKey];
