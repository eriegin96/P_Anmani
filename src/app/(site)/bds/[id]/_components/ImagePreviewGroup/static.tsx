import {TImageMainKey} from "@/types/product.type";

export const mainImageStatic: Record<
	TImageMainKey,
	{value: TImageMainKey; label: string}
> = {
	exterior: {value: "exterior", label: "Bên ngoài"},
	livingroom: {value: "livingroom", label: "Phòng khách"},
	bedroom: {value: "bedroom", label: "Phòng ngủ"},
	bathroom: {value: "bathroom", label: "Phòng tắm"},
	lobby: {value: "lobby", label: "Sảnh chờ"},
	restaurant: {value: "restaurant", label: "Nhà hàng"},
	pool: {value: "pool", label: "Bãi tắm & Hồ bơi"},
	meetingroom: {value: "meetingroom", label: "Phòng họp"},
	entertainment: {value: "entertainment", label: "Phương tiện giải trí"},
	service: {value: "service", label: "Dịch vụ"},
};
