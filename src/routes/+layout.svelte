<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";

	import "$lib/style.css";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex justify-center">{@render children()}</div>
