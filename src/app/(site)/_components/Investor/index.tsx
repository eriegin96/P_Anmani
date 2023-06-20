import React from "react";

type TCategoryProps = {
	title: string;
};

export default function Investor({title}: TCategoryProps) {
	return <div>{title}</div>;
}
