import React from "react";

type TCategoryProps = {
	title: string;
};

export default function Category({title}: TCategoryProps) {
	return <div>{title}</div>;
}
