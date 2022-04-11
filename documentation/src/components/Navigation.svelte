<script>
	import ThemeSwitch from '../components/ThemeSwitch.svelte';
	import StickyBottom from '../components/StickyBottom.svelte';
	export let isAlgoliaExampleOpen;
	export let isSimpleExampleOpen;
	const links = ['Installation', 'Anatomy', 'Props', 'Slots', 'Example'];
	import { browser } from '$app/env';
	$: isMac = browser && /mac/i.test(navigator.platform);
</script>

<div class="flex-1 flex flex-col">
	<div class="flex px-10 pt-10 justify-between items-center mb-20 ">
		<h1 class="text-lg font-bold leading-tight">Svelte spotlight</h1>
		<ThemeSwitch />
	</div>
	<div class="p-10">
		{#each links as link}
			<a href={`#${link.toLowerCase()}`}
				><button class="w-full text-left hover:bg-primary hover:text-white px-6 py-2 rounded-lg">
					{link}
				</button>
			</a>
		{/each}
	</div>
	<div class="px-4">
		<button
			class="btn btn-outline btn-accent mt-5"
			on:click={() => (isAlgoliaExampleOpen = !isAlgoliaExampleOpen)}
		>
			Open complex Algolia example ({!isMac ? 'ctrl' : '⌘'} + k)
		</button>
	</div>
	<div class="px-4">
		<button
			class="btn btn-outline  btn-secondary mt-5"
			on:click={() => (isSimpleExampleOpen = !isSimpleExampleOpen)}
		>
			Open basic documentation example ({!isMac ? 'ctrl' : '⌘'} + j)
		</button>
	</div>
</div>
<StickyBottom />
