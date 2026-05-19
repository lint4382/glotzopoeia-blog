<script lang="ts">
	import { resolve } from "$app/paths";

	let { data } = $props();
</script>

<div class="post max-w-5xl p-10">
	<a href={resolve("/")} class="mb-12 -ml-5 block">&laquo; Go back!</a>

	<h1>{data.post.title}</h1>

	<data.post.default />
</div>
