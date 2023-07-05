import {documentList} from "@/mock/data";

export default function Page() {
	return (
		<div>
			{documentList.map((document) => (
				<div key={document.id}>
					<a href={document.href} target="_blank" rel="noreferer" download>
						{document.title}
					</a>
				</div>
			))}
		</div>
	);
}
