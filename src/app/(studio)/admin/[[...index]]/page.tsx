"use client";

import studioConfig from "@/sanity/config/studio";
import {NextStudio} from "next-sanity/studio";

export default function AdminPage() {
	return <NextStudio config={studioConfig} />;
}
