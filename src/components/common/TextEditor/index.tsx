"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import styles from "./textEditor.module.scss";

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});

type TTextEditorProps = {
	value?: string;
	onChange?: any;
};

const toolbarOptions = [
	[{header: [1, 2, 3, 4, 5, 6, false]}],
	[{size: []}], // custom dropdown
	["bold", "italic", "underline", "strike", "blockquote"], // toggled buttons
	[{list: "ordered"}, {list: "bullet"}],
	[{script: "sub"}, {script: "super"}], // superscript/subscript
	[{indent: "-1"}, {indent: "+1"}], // outdent/indent
	[{color: []}, {background: []}], // dropdown with defaults from theme
	[{align: []}],
	["link", "image"],
	["clean"], // remove formatting button
];

export default function TextEditor({value, onChange}: TTextEditorProps) {
	return (
		<ReactQuill
			theme="snow"
			modules={{toolbar: toolbarOptions}}
			// value={value}
			// onChange={onChange}
			className={styles.reactQuill}
		/>
	);
}
