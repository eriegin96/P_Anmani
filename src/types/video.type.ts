import {TProduct} from "./product.type";

export type TExploreVideo = {
	key: string;
	title: string;
	stories: TExploreVideoStory[];
	products: TProduct[];
};

export type TExploreVideoStory = {
	key: string;
	title: string;
	url: string;
	type: "video" | "image";
};

export type TExploreVideoForm = Omit<TExploreVideo, "key">;
