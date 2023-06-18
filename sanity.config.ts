import {defineConfig} from "sanity";
import {deskTool} from "sanity/desk";
import {schemaTypes} from "@/sanity/schemas";

export default defineConfig({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
	title: "P_Anmani",
	apiVersion: "2023-06-18",
	basePath: "/admin",

	plugins: [deskTool()],
	schema: {
		types: schemaTypes,
	},
});
