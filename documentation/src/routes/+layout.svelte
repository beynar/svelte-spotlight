<script>
	import '../app.css';
	import Pokedex from '../components/Pokemon/Pokedex.svelte';
	import SimpleExmample from '../components/Simple/Simple.svelte';
	import SideMenu from '../components/SideMenu.svelte';
	import SvelteThemes from 'svelte-themes/SvelteTheme.svelte';
	import Navigation from '../components/Navigation.svelte';
	let isAlgoliaExampleOpen = false;
	let isSimpleExampleOpen = false;
</script>

<SvelteThemes />
<SideMenu bind:isAlgoliaExampleOpen bind:isSimpleExampleOpen />
<main class="flex w-full relative">
	<Pokedex bind:isOpen={isAlgoliaExampleOpen} />
	<SimpleExmample bind:isOpen={isSimpleExampleOpen} />
	<aside
		class="w-[90%] max-w-[300px] sticky top-0 left-0 h-screen hidden md:flex border-r-[1px] border-slate-400 justify-between flex-col"
	>
		<Navigation bind:isAlgoliaExampleOpen bind:isSimpleExampleOpen />
	</aside>
	<div class="flex-1 p-4 w-full  max-w-3xl mx-auto">
		<slot />
	</div>
</main>
