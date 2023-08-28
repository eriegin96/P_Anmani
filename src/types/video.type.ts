export type TExploreVideo = {
	key: string;
	title: string;
	stories: TExploreVideoStory[];
};

export type TExploreVideoStory = {
	key: string;
	title: string;
	url: string;
	type: "video" | "image";
};

export type TExploreVideoForm = Omit<TExploreVideo, "key">;
