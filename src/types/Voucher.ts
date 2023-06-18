export type Voucher = {
	_id: string;
	_createdAt: Date;
	name: string;
	discount: {
		amount: number;
		percent: number;
	};
	expiredDate: Date;
};
