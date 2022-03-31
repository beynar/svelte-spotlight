<script context="module" lang="ts">
	import Anatomy from '../components/Anatomy/Anatomy.svelte';
	import Props from '../components/Props/Props.svelte';
	import Example from '../components/Examples/Examples.svelte';
	import Slots from '../components/Slots/Slots.svelte';

	// export const prerender = true;
	const copy = (e) => {
		const text = e.target.textContent;
		navigator.clipboard.writeText(text).then(() => {
			const minWidth = e.target.clientWidth;
			e.target.style.width = `${minWidth}px`;
			e.target.textContent = 'Copied 🎉';
			setTimeout(() => {
				e.target.style.width = 'auto';
				e.target.textContent = text;
			}, 1000);
		});
	};
</script>

<div class="mb-20">
	<h1 id="installation" class="text-6xl font-bold mt-20">Svelte-spotlight</h1>
	<p class="mt-5 font-bold text-2xl">Headless spotlight component for Svelte</p>
	<p class="mb-5 font-bold text-2xl">Build your site global search box in minutes</p>
	<div on:click={copy} class="snippet">npm i svelte-spotlight</div>
	<div on:click={copy} class="snippet">pnpm add svelte-spotlight</div>
	<div on:click={copy} class="snippet   ">yarn add svelte-spotlight</div>
	<ul class="mt-5 p-4">
		<li>Bring your own style, completely headless. Svelte-spotlight only handle the layout.</li>
		<li>Search method agnostic, local or asynchronous.</li>
		<li>
			Data agnostic, render flat lists or grouped results. Integrate perfectly with Algolia
			multi-index search.
		</li>
		<li>Great DX with full TS support</li>
		<li>9 slots to customize every part you need</li>
		<li>Animate it as you wish</li>
		<li>Keyboard shortcut and navigation</li>
		<li>Accessible (kind of)</li>
	</ul>
	<Anatomy />
	<Props />
	<Slots />
	<Example />
</div>

<style>
	.snippet {
		@apply cursor-pointer text-center font-mono text-xs px-2 py-1 rounded-full bg-primary text-primary-content inline-block;
	}
	li {
		@apply list-disc;
	}
</style>
