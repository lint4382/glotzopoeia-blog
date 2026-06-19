<script module lang="ts">
	export const title = "Editor-political alignment of Glotzopoeia";
	export const date = new Date("2026-06-19T12:25:07");
	export const blurb = "Choices. Also, read this if you recently tried to get in touch with me.";
</script>

<script lang="ts">
	import { createLayout, createTimeline } from "animejs";
	import { onMount, tick } from "svelte";

	function block(props: { label: string; type: "normal" | "bold" | "control"; hidden: boolean }) {
		return {
			key: crypto.randomUUID(),
			...props,
		};
	}

	let blocksDom: HTMLDivElement;
	const blocks = $state([
		...Array.from("Hello ").map((c) => block({ label: c, type: "normal", hidden: false })),
		block({ label: "<b>", type: "control", hidden: false }),
		...Array.from("world").map((c) => block({ label: c, type: "bold", hidden: false })),
		block({ label: "s", type: "bold", hidden: true }),
		block({ label: "<b>", type: "control", hidden: false }),
		block({ label: "!", type: "normal", hidden: true }),
	]);
	let cursor = $state(13);

	onMount(() => {
		const layout = createLayout(blocksDom);

		let timeline = createTimeline({ loop: true })
			.call(async () => {
				layout.record();
				blocks[12].hidden = false;
				await tick();
				layout.animate();
			}, "+=500")
			.call(async () => {
				layout.record();
				blocks[12].hidden = true;
				cursor = 13;
				await tick();
				layout.animate();
			}, "+=500")
			.call(async () => {
				layout.record();
				cursor = 15;
				await tick();
				layout.animate();
			}, "+=500")
			.call(async () => {
				layout.record();
				blocks[14].hidden = false;
				await tick();
				layout.animate();
			}, "+=500")
			.call(async () => {
				layout.record();
				blocks[14].hidden = true;
				await tick();
				layout.animate();
			}, "+=500")
			.call(async () => {
				layout.record();
				cursor = 13;
				await tick();
				layout.animate();
			}, "+=500");
	});

	const source = `
<interlinear>
  <source>meli li unpa e kala.</source>
  <word>meli</word>
  <gloss>woman</gloss>
  <word>li</word>
  <gloss>PRED</gloss>
  <word>unpa</word>
  <gloss>fuck</gloss>
  <word>e</word>
  <gloss>OBJ</gloss>
  <word>kala</word>
  <gloss>fish</gloss>
  <translation>The woman fucks the fish.</translation>
</interlinear>
`;
</script>

<div class="flex flex-col gap-8">
	<p>
		Before anything else: If you're the person whose Discord friend request I rejected, please send
		it again. I rejected it because I am a big dum dum who forgot that she has an online presence
		now. I assumed it had to be a bot. Sorry!
	</p>

	<hr />

	<div class="bilingual">
		<p>
			mi pali e ilo [ko . sona . pona . jan .] <br />
			jan li ken pali e toki kepeken ilo ni <br />
		</p>

		<p>I am making a tool to help you create languages, called Glotzopoeia.</p>

		<p>
			tenpo poka la mi toki insa e ni : <br />
			te ilo pali la nasin seme li lon <br />
			_ mi wile kepeken nasin seme tawa ilo [ko] to <br />
		</p>

		<p>
			Recently I've been thinking: What are the different ways to use editors, and which is right
			for Glotzopoeia?
		</p>

		<p>
			mi sitelen e lipu ni kepeken te toki pona to tawa ni : <br />
			__ sina sona ala e sona ilo la sina sona e kon pi toki mi <br />
			__ sina sona ala e sona toki la sina sona e kon pi toki mi <br />
		</p>

		<p>
			I am writing this entry in Toki Pona, because it helps me express things in a way that is
			hopefully understandable for everybody, without relying too much on tech / linguist jargon.
		</p>
	</div>

	<div class="bilingual">
		<h2>te nasin lukin to anu te nasin kon to</h2>

		<h2>Presentation vs. meaning</h2>

		<p>
			ilo te MS _ WORD to li kepeken te nasin lukin to <br />
			sina wile kule wawa e nimi la <br />
			__ o tawa e luka lili tawa ona <br />
			__ o pilin e nena usawi <br />
			ni la nimi li kama kule wawa <br />
		</p>

		<p>
			Microsoft Word works with "presentation". If you want to bold a word, you can select it and
			press a magic key. Then the word will show up as bold.
		</p>

		<p>
			lipu pi wan taso li lon :<br />
			__ sina pali lon lipu <br />
			__ tenpo pi pali pini la jan ante li lukin e lipu sama <br />
		</p>

		<p>
			There's only one document. The document you edit looks the same as the one that other people
			look at later.
		</p>

		<p>
			toki te HTML to li kepeken te nasin kon to <br />
			sina wile kule wawa e nimi la <br />
			__ o toki e usawi ni> lon open nimi _ <code class="text-red-500">&lt;b&gt;</code> <br />
			____ e usawi ni> lon pini nimi _ <code class="text-red-500">&lt;/b&gt;</code> <br />
		</p>

		<p>
			HTML works with "meaning". To bold a word in HTML, you put <code class="text-red-500"
				>&lt;b&gt;</code
			>
			at the start and <code class="text-red-500">&lt;/b&gt;</code> at the end.
		</p>

		<p>
			lipu tu li lon : <br />
			__ lipu pali la nimi li jo ala e kule wawa <br />
			______ li jo _ e nimi usawi <br />
			__ lipu lukin la nimi li jo _ e kule wawa <br />
			______ li jo ala e nimi usawi <br />
		</p>

		<p>
			In HTML there are two documents. Your working document doesn't have formatting, just these
			special tags. In the one you later look at, these special tags are no longer there, and
			instead there's formatting.
		</p>

		<p>nasin seme li pona</p>

		<p>Which system is better?</p>

		<p>
			te nasin lukin to li pona mute lon tenpo open <br />
			____ li ken jaki lon tenpo kama <br />
		</p>

		<p>The "presentation" paradigm is very intuitive at the start, but it can get messy later.</p>

		<p>
			o lukin e jaki2 ni : <br />
			__ nimi wan li kule wawa <br />
			__ mi tawa e luka lili tawa pini pi nimi ni <br />
			__ li sitelen e nimi sin lon ma ni <br />
			nimi sin ni o jo ala jo e kule wawa <br />
			wile tu ni li ken <br />
			ilo li sona ala e wile mi <br />
			mi pilin e ni: : _ mi en ilo li utala <br />
		</p>

		<p>
			Consider the following situation: I have a word that's bolded, and I move the cursor to the
			end of this word and type another word. In this situation, should this new word also be bolded
			or not? Both of these are plausible desires. The tool can't know which I want. So, it feels
			like I'm fighting against the tool.
		</p>

		<p>
			ilo [ko] li kepeken nasin meso <br />
			insa la toki te XML to en toki te HTML to li lon <br />
			selo la lipu pali li sama lipu pini tawa lukin <br />
			__ taso jaki utala li lon la ona li ken ante lili lukin <br />
			__ ilo [ko] li weka ala e insa ilo tan lukin sina <br />
		</p>

		<p>
			Glotzopoeia uses a hybrid paradigm. Internally, it uses XML and HTML. In the interface, the
			editing view on the document will look similar to the final output. However, to prevent nasty
			conflicts like the above, the view may look a little different. Glotzopoeia won't hide the
			internals from you.
		</p>
	</div>

	<div bind:this={blocksDom} class="flex justify-start">
		{#each blocks as block, i (block.key)}
			<div class="relative">
				<div
					data-layout-id="cursor"
					class:hidden={cursor !== i}
					class="absolute -left-2 h-full w-0.5 bg-red-500"
				></div>
				<div
					class="mr-4 flex h-10 w-10 items-center justify-center rounded border"
					class:bg-gray-300={block.type === "control"}
					class:text-gray-600={block.type === "control"}
					class:font-bold={block.type === "bold"}
					class:hidden={block.hidden}
				>
					{block.label}
				</div>
			</div>
		{/each}
		<div class="relative">
			<div
				data-layout-id="cursor"
				class:hidden={cursor !== blocks.length}
				class="absolute -left-2 h-full w-0.5 bg-red-500"
			></div>
			<div class="h-10 w-10"></div>
		</div>
	</div>

	<div class="bilingual">
		<p>
			ni li suli kin tan ijo nanpa tu ni <br />
			sina tawa weka tan ilo [ko] la <br />
			__ sona pi ilo [ko] o moli ala <br />
			sina o ken awen kepeken sona ni <br />
			_ o ante suli ala <br />
			sina ken lukin lon insa sona la ni li lon <br />
		</p>

		<p>
			This is also important for a second reason. If you decide to move away from Glotzopoeia, it
			should be possible to easily keep using your data with different software without a big
			adjustment. A transparent representation facilitates this.
		</p>

		<p>
			lipu pi ilo [ko] li nimi mute taso ala <br />
			sitelen li lon kin <br />
			sitelen pi jasima toki li wan ni <br />
			__ sitelen ni li jo e linja pi nimi mute kepeken toki pi sona ala <br />
			__ nimi ale li jo kin e nimi kepeken toki sona <br />
			__ ni la sina sona _ e kon pi linja nimi <br />
			____ li sona kin e nasin pali ona <br />
			sitelen ante mute li lon kin <br />
		</p>

		<p>
			Documents in Glotzopoeia do not just contain text. There are also many kinds of figures. One
			of these are interlinear glosses. These figures contain a sentence in a foreign language. For
			each word, they state a translation using a known language. Through this, you know the meaning
			of the foreign sentence, but you also know how it is structured. There are also many other
			kinds of figures like this.
		</p>

		<p>
			sina ken sitelen e ni kepeken nimi taso <br />
			_____ kepeken toki te XML to <br />
			taso ni li jaki li kepeken tenpo mute <br />
			ni la mi wile lanpan tan te nasin lukin to <br />
		</p>

		<p>
			You can work with this in a text-only representation using XML, but this feels inconvenient
			and slow. Since the "presentation" paradigm is much more convenient, I want to borrow its
			ideas.
		</p>
	</div>

	<div class="twogrid gap-6">
		<div class="relative">
			<pre class="text-xs">{source}</pre>
			<div class="absolute inset-0 flex rotate-12 items-center justify-center">
				<div class="rounded-xl border bg-white p-2 text-red-500">
					<div class="font-tp text-4xl">ike a</div>
					<div>No way!</div>
				</div>
			</div>
		</div>

		<div class="relative flex items-center justify-center">
			<div class="rounded border p-2 text-xl">
				<div>meli li unpa e kala.</div>

				<div class="grid grid-cols-[repeat(5,auto)] justify-start gap-x-4">
					<div>meli</div>
					<div>li</div>
					<div>unpa</div>
					<div>e</div>
					<div>kala</div>
					<div>woman</div>
					<div>PRED</div>
					<div>fuck</div>
					<div>OBJ</div>
					<div>fish</div>
				</div>

				<div>The woman fucks the fish.</div>
			</div>
			<div class="absolute inset-0 flex rotate-12 items-center justify-center">
				<div class="rounded-xl border bg-white p-2 text-green-500">
					<div class="font-tp text-4xl">pona a</div>
					<div>Hell yeah!</div>
				</div>
			</div>
		</div>
	</div>

	<div class="bilingual">
		<h2>te nasin poki to anu te nasin lipu to</h2>

		<h2>Database vs. file system storage</h2>

		<p>
			sina kepeken ilo [ko] la sina pali e toki <br />
			sona toki li lon seme <br />
			ilo li wile e poki sona <br />
		</p>

		<p>
			When you use Glotzopoeia, you are making a language. Where does that knowledge of the language
			live? The tool needs a way to store it.
		</p>

		<p>
			mi wile e ni : <br />
			__ sina ken pali kepeken ilo [ko] lon tenpo wan <br />
			__ li ken pali kepeken ilo ante __ lon tenpo ante <br />
			__ ona tu li utala ala <br />
			sona o lon tomo kulupu <br />
		</p>

		<p>
			I want it to be possible to switch between Glotzopoeia and other tools to edit your language
			documentation, with minimal friction between them. The data should be communally owned.
		</p>

		<p>
			mi wile kepeken te nasin lipu to pi ilo mama <br />
			ni li seme <br />
			lipu ale li lon kasi suli <br />
			sina tawa sewi tan anpa la palisa wan li kama palisa mute <br />
			ma ale pi mama palisa li te poki to <br />
			pini pi kasi suli _ li te lipu to <br />
		</p>

		<p>
			I will therefore use the host OS's file system. What does that mean? Well, all documents are
			in a big tree. Going from the root to the top, one branch splits into many smaller branches.
			The places at which branches split are the directories. The leaves at the end are the
			documents.
		</p>

		<p>
			poki sona sina la ilo ale li ken kepeken te nasin lipu to ni <br />
			______ li ken toki kepeken toki wan <br />
			______ li ken esun e sona <br />
		</p>

		<p>
			All the applications on your computer can work with the file system in a unified manner and
			use it to exchange information.
		</p>

		<p>
			ilo [o sike . sike . jan :] <br />
			__ li kepeken mute te nasin lipu to <br />
			__ li pona tawa mute tan ni <br />
		</p>

		<p>
			Obsidian works very closely with the file system, which makes it a lot more flexible than
			other organization apps.
		</p>

		<p>
			ilo mute li kepeken ilo poki sama ilo te SQLITE to <br />
			ilo poki li ken lanpan e sona kepeken tenpo lili <br />
			taso ilo ante li ken ala lanpan e sona pi ilo poki kepeken nasin mama <br />
		</p>

		<p>
			Many tools instead use a database like SQLite for this. Databases can retrieve information
			very quickly. But, the data can't be accessed from other applications as easily.
		</p>

		<p>
			mi kepeken ilo poki kin <br />
			__ taso sona ona o ken weka o ken jaki <br />
			__ lipu li lawa e sona li pana e ona tawa ilo poki <br />
			__ ilo poki li wawa taso e lukin <br />
		</p>

		<p>
			I will still use a database alongside the document storage. However, it will only function as
			a cache. The document storage "owns" the information and functions as the authority.
		</p>
	</div>

	<div class="bilingual">
		<h2>te nasin lili to anu te nasin suli to</h2>

		<h2>Minimalism vs. batteries included</h2>

		<p>
			tenpo pi sin ala la ilo te VIM to <br />
			____ en ilo te EMACS to <br />
			__ li lawa e ilo pi sitelen nimi <br />
		</p>

		<p>In the old days, Vim and Emacs ruled the world of text editors.</p>

		<p>
			ilo te VIM to li jo e lili <br />
			______ li jo e ike lili <br />
			______ li jo e pona lili <br />
			ni li te nasin lili to <br />
		</p>

		<p>
			Vim doesn't come with a lot of things. This means it doesn't have a lot of useless cruft. But,
			it also lacks many built-in features you might want in a text editor. This is "minimalism".
		</p>

		<p>
			ilo te EMACS to li jo e mute <br />
			________ li jo e pona mute <br />
			________ li jo e jaki mute <br />
			ni li te nasin suli to <br />
		</p>

		<p>
			On the contrary, Emacs has everything. On one hand, this includes extremely powerful
			capabilities. But on the other hand, it's also a bloated mess of obscure features. This is
			"batteries included".
		</p>

		<p>
			tenpo ni la ilo mute pi pali toki li jo e namako ike <br />
			namako ni wan li ilo pi ante kalama <br />
			__ sama ilo <a href="https://www.zompist.com/sca2.html">te SCA to nanpa tu</a> pi jan <br />
			__ [ma : loje . seli . n poki e taso .]
		</p>

		<p>
			Currently, the conlanging apps I have seen have a lot of bloat. For example, they include a
			built-in sound change applier like Mark Rosenfelder's <a
				href="https://www.zompist.com/sca2.html">SCA<sup>2</sup></a
			>.
		</p>

		<p>
			namako ni li ken pona e ilo <br />
			taso tenpo open la ona li suli ala <br />
			_ tenpo open la mi wile pali e te pan to pona <br />
			____ ni li suli nanpa wan <br />
			ni li pini ale la namako li ken kama <br />
		</p>

		<p>
			While having this kind of thing integrated can make things convenient, it's more important to
			me to have a really solid UX for the basics. When everything is done, I might return to nifty
			extras like this.
		</p>

		<p>
			mi jan wan taso li pali e mute ante la <br />
			__ mi ken ala pali e ilo pi suli mute <br />
			taso mi wile e ni : <br />
			ilo [ko] li wile e ijo tawa pona la <br />
			__ ona o jo e ijo ni lon tenpo kama <br />
			mi wile pali e ilo [ko] lon tenpo suli <br />
		</p>

		<p>
			Since I'm just one person who is busy with a lot of other things, I can't really make
			something huge like Emacs. But I would like Glotzopoeia to eventually have all the features it
			needs to feel like a comprehensive editor. This is a long-term effort for me.
		</p>
	</div>

	<hr />

	<div class="bilingual">
		<p>
			ni li pini pi lipu ni <br />
			mi sitelen e lipu pi mun pini kepeken tenpo lili taso <br />
			mi wile e ni : <br />
			__ lipu ni li pona e sona sina pi pali mi <br />
		</p>

		<p>
			And there we have it. I wrote last month's entry in a rush, so I hope this gives you a better
			idea of what this project is aiming for.
		</p>

		<p>mi o oko sin e sina lon tenpo poka _ 👁️</p>

		<p>I hope I will <em>see</em> you again soon! &nbsp; 👁️</p>
	</div>
</div>

<style>
	.bilingual,
	.twogrid {
		@apply grid grid-cols-1;
	}

	@media (width >= 48rem) {
		.bilingual,
		.twogrid {
			@apply grid-cols-2;
		}
	}

	.bilingual > :nth-child(odd) {
		font-family: "linja lipamanka";
	}
</style>
