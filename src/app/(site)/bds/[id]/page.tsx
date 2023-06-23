type TProductPageProps = {
	params: {id: string};
};

// export const dynamicParams = true // true | false,

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
// const posts = await fetch("https://.../posts").then((res) => res.json());
// return posts.map((post) => ({
// 	slug: post.slug,
// }));
// }

export default function ProductPage({params}: TProductPageProps) {
	console.log(params);
	return <div>ProductPage: {params.id}</div>;
}
