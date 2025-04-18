import {DATE_FORMAT} from "@/constants/common";
import dayjs from "dayjs";

export const formatDate = (
	date: string | number | Date | dayjs.Dayjs | null | undefined
) => {
	return dayjs(date).format(DATE_FORMAT);
};

export const formatFulldate = (
	date: string | number | Date | dayjs.Dayjs | null | undefined
) => {
	return dayjs(date).format("HH:mm DD/MM/YYYY");
};
