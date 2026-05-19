<script lang="ts">
	import { resolve } from "$app/paths";
	import { posts, sortedPosts } from "$lib/posts";
	import { onMount } from "svelte";
</script>

<div class="min-h-screen w-full max-w-5xl p-10">
	<div class="flex justify-center">
		<div class="multiocular-o inline-block text-8xl">ꙮ</div>
	</div>
	<h1 class="mt-6 text-center text-3xl">The Glotzopoeia Blog</h1>
	<div class="mb-6 text-center">
		( <a class="text-red-500" href="https://github.com/lint4382/glotzopoeia">project github</a>
		&bullet;
		<a class="text-red-500" href="https://github.com/lint4382/glotzopoeia-blog">blog source</a>
		&bullet;
		<a class="text-red-500" href={resolve("/rss")}>rss</a> )
	</div>

	<div>
		{#each sortedPosts as [slug, post]}
			<a href={resolve("/posts/[slug]", { slug })} class="block border p-5">
				<div class="mb-2 flex justify-between">
					<div class="font-bold">{post.title}</div>
					<div>{post.date.toISOString().split("T")[0]}</div>
				</div>
				<div class="italic">{post.blurb}</div>
			</a>
		{/each}
	</div>
</div>

<style>
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.multiocular-o {
		animation: spin 1.2s linear infinite;
	}
</style>
