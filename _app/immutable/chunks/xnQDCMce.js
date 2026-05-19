import{I as e,N as t,P as n,g as r,m as i,z as a}from"./BnjPmBoR.js";import"./DXLwiZ0H.js";var o=a({blurb:()=>l,date:()=>c,default:()=>d,title:()=>s}),s=`Introducing Glotzopoeia`,c=new Date(`2026-05-19T22:59:07`),l=`What am I doing? Who is this for? Find out NOW!`,u=r(`<p>Glotzopoeia is an application for the curation of linguistic information, i.e. a dictionary-making
	app, that I am working on NOW!</p> <h2>Motivation, Vision, Scope</h2> <details><summary>TL;DR: Conlanging is uniquely hard and I'm a perfectionist.</summary> <p>Dictionaries defy the usual dichotomy and "hard data" and "soft knowledge" that most other
		curation apps are implicitly based on.</p> <ul><li><p>If you need to curate <em>hard data</em>, you can put it into an Excel spreadsheet or a
				relational database or a knowledge graph. You conform to a rigid structure, but in turn get
				the ability to sort and filter and aggregate your dataset however you feel like it.</p></li> <li><p>If you need to curate <em>soft knowledge</em>, you write a book or some interlinked wiki
				articles. This is much harder for computers to digest, but more flexible if you can't make
				the information conform to a rigid schema.</p></li></ul> <p>Dictionaries obviously benefit from being searched through in a "hard data" way. However, the
		art of conlanging defies formalization on many levels:</p> <ul><li><p>Words often fit into parts-of-speech, classes or conjugation paradigms, but just as often
				there are words that don't fit into these patterns or are fluid between them in some way.
				And of course, the ontology used differs from language to language. For the English category
				of "adjective", Japanese has two corresponding categories, while Guaraní has none. If you
				want to make a dictionary app for a concrete language, that's probably feasible to
				accomplish (check Sylvia Sotomayor's excellent <a href="https://www.terjemar.net/kelen/Dict/dict0.php">Kēlen dictionary</a>, which was the original inspiration for this project, or <a href="https://la-lojban.github.io/sutysisku/lojban/index.html">la sutysisku</a>). If you
				want to make a <em>general</em> dictionary app, however, you either impose your strong assumptions
				of how language works onto your users, or you make so little assumptions that your app is barely
				more useful than a generic spreadsheet/wiki app, or you figure out a way to let users specify
				their own ontology without sacrificing user-friendliness (the latter is what Glotzopoeia attempts
				to do).</p></li> <li><p>The usage of a word can never be exactly pinned down, because it's a product of the
				collective subconscious of all speakers of the language. Dictionaries for natural languages
				can often get away with giving a simple definition -- after all, they serve a descriptive
				purpose for something that already exists. Conlangs don't often have a huge text corpus or
				active speaker base, and so conlang dictionaries carry the burden of being the main concrete
				manifestation of the language; the main gateway through which it can be understood and
				appreciated as a work of art. Giving flavorful usage notes and example sentences goes a long
				way towards making the conlang feel warm and alive. Rigid schemas encourage the opposite of
				that.</p></li> <li><p>It makes sense to want to document the conlang's grammar in the same framework as the
				dictionary, in order to allow for easy cross-referencing between dictionary entries and
				grammar pages, sharing example sentences from the same corpus, and the like. In the same
				vein, many conlangs are made in the context of larger worldbuilding projects, and it makes a
				lot of practical sense to link these in as well for the same reason; maybe you have lore
				texts written in the conlang, or maybe the conlang is directly tied to the world's magic
				system. These things would benefit from having their own ontologies. While writing D&amp;D
				character sheets will obviously not be the main goal of Glotzopoeia, it also shouldn't be
				discounted as "out of scope".</p></li></ul> <p>It makes sense to ask if Glotzopoeia should even be called a conlanging app if its ambitions are
		that broad. For a long period during planning, all the language-related stuff was going to be
		relegated to a plugin. However, I've come to realize that making something that is a conlanging
		app first and foremost is less disorienting than an "anything app", so the generalizations will
		come once the primary use case is all sorted out.</p></details> <h2>Hard fax</h2> <ul><li><p>Glotzopoeia will use the cross-platform app framework Tauri, with a Rust backend and a Svelte
			frontend. The text editor component leverages the excellent Codemirror 6 library, which I
			strongly recommend using if you ever find yourself in a position where you need to write your
			own text editor.</p></li> <li><p>Glotzopoeia will be a desktop application. I might make a mobile port but that'll probably be
			a lot of work.</p></li> <li><p>Glotzopoeia saves all data as local XML files. I have designed a lightweight markup / data
			description language that <em>might</em> be offered as an alternative later, but XML has interoperability
			with HTML, good tooling support, and -- most importantly -- it's a stable foundation that doesn't
			constantly shift as I change my mind about things.</p></li> <li><p>The editing interface will be a hybrid of WYSIWYG and WYSIWYM, somewhat like Notion. The XML
			representation will be transparent in the sense that, if you are ever forced to dip down to it
			(e.g. to resolve a git merge conflict), it won't be a disorienting experience, just a less
			intuitive / convenient one.</p></li> <li><p>Glotzopoeia will be open-source software licensed under GPLv3.</p></li></ul> <h2>The here and now</h2> <p>This has been my main pet project for multiple years, but I have basically started from complete
	scratch after multiple prototypes because my idea of what this project is has kept shifting and
	evolving over time. So, there currently is no Glotzopoeia other than what is inside my head. It's
	all just plans.</p> <p>I set up this blog yesterday. I will post updates whenever something significant happens. I can't
	make any promises that those updates will actually happen, or when they will happen, but I will
	try my best.</p> <p>The repo is at <a href="https://github.com/lint4382/glotzopoeia">https://github.com/lint4382/glotzopoeia</a>.</p> <p>Discussions on the project take place on its Discord server. It's not open to the public for now,
	but if you somehow got to this place from elsewhere you can DM me on Discord (lint4382) and I will
	happily add you.</p>`,1);function d(r,a){n(a,!0);var o=u();e(18),i(r,o),t()}var f=Object.assign({"/src/lib/posts/2026-05-18.svelte":o}),p={};for(let e of Object.keys(f))p[e.split(`/`).pop().replace(`.svelte`,``)]=f[e];var m=Object.entries(p).toSorted(([e,t],[n,r])=>r.date-t.date);export{m as n,p as t};