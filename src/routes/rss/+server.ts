import { posts, sortedPosts } from "$lib/posts";

export const prerender = true;

export const GET = async () => {
	const body = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="https://lint4382.github.io/glotzopoeia-blog/rss" rel="self" type="application/rss+xml" />
<title>Glotzopoeia</title>
<link>https://lint4382.github.io/glotzopoeia-blog/</link>
<description>Conlanging app devlog</description>
${sortedPosts
	.map(
		([slug, post]) => `<item>
<guid>https://lint4382.github.io/glotzopoeia-blog/posts/${slug}</guid>
<title>${post.title}</title>
<link>https://lint4382.github.io/glotzopoeia-blog/posts/${slug}</link>
<description>${post.blurb}</description>
<pubDate>${post.date.toUTCString()}</pubDate>
</item>`,
	)
	.join("")}
</channel>
</rss>
`;
	const headers = {
		"Cache-Control": `max-age=0, s-max-age=${600}`,
		"Content-Type": "application/xml",
	};
	return new Response(body, { headers });
};
