export const NOTIFICATION_TYPE = {
	UPDATE: "update",
	INFO: "info",
} as const;

export const NOTIFICATION_TARGET_TYPE = {
	ALL: "all",
	INDIVIDUAL: "individual",
} as const;

export const NOTIFICATION_TYPE_LABEL = {
	[NOTIFICATION_TYPE.UPDATE]: "Cập nhật tiến độ thanh toán",
	[NOTIFICATION_TYPE.INFO]: "Khuyến mãi và thông tin từ nhà đầu tư",
} as const;
