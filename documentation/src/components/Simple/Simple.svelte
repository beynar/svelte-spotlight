<script lang="ts">
	import SvelteSpotlight from 'svelte-spotlight/src/lib/SvelteSpotlight.svelte';
	import { matchSorter } from 'match-sorter';
	export let isOpen;
	let query = '';
	let items = [
		{
			title: 'Installation',
			description: 'Install svelte-spotlight with your favorite package manager.',
			icon: 'eazea'
		},
		{
			title: 'Anatomy',
			description: 'How svelte-spotlight is built.',
			icon: 'eazea'
		},
		{
			title: 'Props',
			description: 'The props you can use to adapt it to your need',
			icon: 'eazea'
		},
		{
			title: 'Slots',
			description: 'List of availabe slots and available slot props.',
			icon: 'eazea'
		},
		{
			title: 'Example',
			description: 'Mininal quick start example',
			icon: 'eazea'
		}
	];
	$: results = matchSorter(items, query, { keys: ['title'] });
</script>

<SvelteSpotlight
	{results}
	bind:query
	combo={{ key: 'l', metaKey: true }}
	bind:isOpen
	modalClass={'w-[600px]  max-w-[95%] bg-base-100 shadow-lg overflow-hidden rounded-sm'}
	headerClass={'py-3 px-10 border-b-2 border-base-300 border-b-solid'}
	inputClass="focus:outline-none bg-transparent"
	resultIdKey="title"
	on:select={(event) => {
		window.location.hash = event.detail.title.toLowerCase();
		isOpen = false;
	}}
>
	<div
		slot="result"
		let:selected
		let:result
		class={`hover:bg-base-200  cursor-pointer text-sm px-10 py-3 w-full ${
			selected ? 'bg-base-300' : ''
		} `}
	>
		{result.title}
		<p class="text-slate-500 text-sm">{result.description}</p>
	</div>

	<div slot="noResults" class="px-10 py-3">
		<p class="text-slate-500 text-sm">No results...</p>
	</div>
</SvelteSpotlight>
