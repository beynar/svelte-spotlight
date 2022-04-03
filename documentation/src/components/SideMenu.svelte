<script lang="ts">
	import { fly } from 'svelte/transition';
	import TiThMenu from 'svelte-icons/ti/TiThMenu.svelte';
	let isOpen = false;
	export let isAlgoliaExampleOpen;
	export let isSimpleExampleOpen;
	import Navigation from './Navigation.svelte';
	const toggle = () => (isOpen = !isOpen);
</script>

<button
	on:click={toggle}
	class="w-[50px] h-[50px] md:hidden auto p-3 z-30 bg-base-100  ghostButton fixed bottom-5 left-5 shadow-lg rounded-full"
>
	<TiThMenu title="menu" width={20} />
</button>

{#key isOpen}
	{#if isOpen}
		<!-- content here -->
		<div
			on:click={toggle}
			transition:fly
			class="fixed top-0 left-0 h-screen z-40  w-screen bg-slate-500 opacity-40"
		/>

		<nav
			in:fly={{ x: -300 }}
			out:fly={{ x: -300 }}
			class="fixed z-50 left-0 top-0 h-screen z-50 min-h-screen w-[300px] bg-base-100 max-w-[100vw] overflow-y-auto flex flex-col justify-between"
		>
			<Navigation bind:isAlgoliaExampleOpen bind:isSimpleExampleOpen />
		</nav>
	{/if}
{/key}
