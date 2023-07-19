export type TExploreVideo = {
	id: string;
	key: string;
	title: string;
	url: string;
	stories: Omit<TExploreVideo, "stories" | "key">[];
};

export type TExploreVideoStory = {
	id: string;
	title: string;
	url: string;
	type: "video" | "image";
};

export type TExploreVideoForm = Omit<TExploreVideo, "id" | "key">;
