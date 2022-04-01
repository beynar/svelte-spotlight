<script>
	import '../app.css';
	import Pokedex from '../components/Pokemon/Pokedex.svelte';
	import SimpleExmample from '../components/Simple/Simple.svelte';
	import SideMenu from '../components/SideMenu.svelte';
	import SvelteThemes from 'svelte-themes/SvelteTheme.svelte';
	import ThemeSwitch from '../components/ThemeSwitch.svelte';
	import StickyBottom from '../components/StickyBottom.svelte';
	let isOpen = false;
	let isSimpleExampleOpen = false;

	const links = ['Installation', 'Anatomy', 'Props', 'Slots', 'Example'];
</script>

<SvelteThemes themes={['light', 'dark']} />
<SideMenu />
<main class="flex w-full relative">
	<Pokedex bind:isOpen />
	<SimpleExmample bind:isOpen={isSimpleExampleOpen} />
	<aside
		class="w-[90%] max-w-[300px] sticky top-0 left-0 h-screen hidden md:flex border-r-[1px] border-slate-400 justify-between flex-col"
	>
		<div class="flex-1 flex flex-col">
			<div class="flex px-10 pt-10 justify-between items-center mb-20 ">
				<h1 class="text-lg font-bold leading-tight">Svelte spotlight</h1>
				<ThemeSwitch />
			</div>
			<div class="p-10">
				{#each links as link}
					<a href={`#${link.toLowerCase()}`}
						><button
							class="w-full text-left hover:bg-primary hover:text-white px-6 py-2 rounded-lg"
						>
							{link}
						</button>
					</a>
				{/each}
			</div>
			<div class="px-4">
				<button class="btn btn-outline btn-accent mt-5" on:click={() => (isOpen = !isOpen)}>
					Open complex Algolia example (⌘ + k)
				</button>
			</div>
			<div class="px-4">
				<button
					class="btn btn-outline  btn-secondary mt-5"
					on:click={() => (isSimpleExampleOpen = !isSimpleExampleOpen)}
				>
					Open basic documentation example (⌘ + j)
				</button>
			</div>
		</div>
		<StickyBottom />
	</aside>
	<div class="flex-1 p-4 w-full  max-w-3xl mx-auto">
		<slot />
	</div>
</main>
