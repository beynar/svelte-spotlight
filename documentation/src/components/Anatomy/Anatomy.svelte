<script lang="ts">
	import Structure from './Structure.svelte';
	import Slots from './Slots.svelte';
	import Classes from './Classes.svelte';
	import DynamicSlots from './DynamicSlots.svelte';
	let tabs = [
		{
			id: 'strucutre',
			tab: 'Strucutre',
			text: 'Overall structure of svelte-spotlight',
			component: Structure
		},
		{
			id: 'classes',
			tab: 'Classes',
			text: 'Available classes and class props',
			component: Classes
		},
		{
			id: 'slots',
			tab: 'Slots',
			text: 'Available slots to adapt spotlight to your needs',
			component: Slots
		},
		{
			id: 'dynamicSlots',
			tab: 'Dynamic slots',
			text: 'Key parts you can replace conditionnaly.',
			component: DynamicSlots
		}
	];
	let currentTab = tabs[0];
</script>

<h2 id="anatomy">Anatomy</h2>

<div class="tabs tabs-boxed w-[fit-content]">
	{#each tabs as tab}
		<div
			on:click={() => (currentTab = tab)}
			class={`tab ${currentTab.tab === tab.tab ? 'tab-active' : ''}`}
		>
			{tab.tab}
		</div>
	{/each}
</div>

<p class=" mx-auto text-slate-400 mt-2 mb-4">
	{currentTab.text}
</p>

<div class="anatomy-part text-sm w-full">
	<svelte:component this={currentTab.component} />
</div>
