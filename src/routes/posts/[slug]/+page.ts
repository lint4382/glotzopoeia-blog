import { posts } from "$lib/posts";

export function entries() {
	return Object.keys(posts).map((slug) => {
		return { slug };
	});
}

export function load({ params }: { params: { slug: string } }) {
	return { slug: params.slug, post: posts[params.slug] };
}
