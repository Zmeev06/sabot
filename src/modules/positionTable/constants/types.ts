export type TrandType = {
	increaseType: 'up' | 'down';
	increaseValue: string;
};

export type ResponseHeader = {
	date: string;
	value: string;
};

export type ResponseBody = {
	increaseType: 'up' | 'down' | 'equal' | 'empty' | 'blue';
	increaseLevel: number;
	title: number;
	value: number;
};

export type ContentCell = {
	header: ResponseHeader;
	body: ResponseBody;
};

export interface Response {
	id: string;
	status: 'failed' | 'success' | 'pending' | 'processing';
	title: string;
	trend: TrandType;
	ws: number;
	contentCells: ContentCell[];
	download: string;
}
