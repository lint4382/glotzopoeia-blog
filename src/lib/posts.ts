const postsByPath = import.meta.glob("$lib/posts/*.svelte", { eager: true });

export const posts: Record<string, any> = {};
for (const key of Object.keys(postsByPath)) {
	posts[key.split("/").pop()!.replace(".svelte", "")] = postsByPath[key];
}

export const sortedPosts: [string, any][] = Object.entries(posts).toSorted(
	([_a, a], [_b, b]) => b.date - a.date,
);
