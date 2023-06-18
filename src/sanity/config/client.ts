import {createClient} from "next-sanity";

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	apiVersion: "2023-06-18",
	// If you wish to have content delivered faster, set `useCdn: false` to use the Live API. Note: You may incur higher costs using the live API.
	useCdn: true,
});

export default client;
