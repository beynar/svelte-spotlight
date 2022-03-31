<script lang="ts">
	import SvelteSpotlight from '$lib/SvelteSpotlight.svelte';
	import algoliasearch from 'algoliasearch/dist/algoliasearch-lite.esm.browser';
	import { onMount } from 'svelte';
	import PokemonItem from './PokemonItem.svelte';
	import PokemonGroup from './PokemonGroup.svelte';
	import PokemonFooter from './PokemonFooter.svelte';
	import PokemonEmptySearch from './PokemonEmptySearch.svelte';
	import PokemonNoResult from './PokemonNoResult.svelte';
	import PokemonHeaderLeft from './PokemonHeaderLeft.svelte';
	import PokemonHeaderRight from './PokemonHeaderRight.svelte';
	import PokemonHeaderCenter from './PokemonHeaderCenter.svelte';
	import PokemonContent from './PokemonContent.svelte';
	export let isOpen = false;
	let preSelectedResult;
	let selectedResult;
	let client;

	let query = '';
	let results: ({ index: string; hits: { name: string; objectID: string }[] } & {})[] = [];
	const indices = [
		'Generation I',
		'Generation II',
		'Generation III',
		'Generation IV',
		'Generation V',
		'Generation VI',
		'Generation VII',
		'Generation VIII'
	];

	$: {
		if (client) {
			client.search(indices.map((indexName) => ({ indexName, query }))).then((data) => {
				results = data.results;
			});
		}
	}

	onMount(() => (client = algoliasearch('A0UYIIBP7T', 'c54ae53acd1b77947196d67bcf4f2d9e')));
</script>

<SvelteSpotlight
	{results}
	bind:query
	bind:isOpen
	bind:preSelectedResult
	bind:selectedResult
	modalClass={'w-[600px] max-w-[95%] preview bg-base-100  shadow-lg margin-t-[40px] rounded-lg '}
	headerClass={'p-4 border-b-[1px] justify-center items-center'}
	inputClass="focus:outline-none bg-transparent py-2 px-4 "
	resultIdKey="objectID"
	contentClass="pokedex"
	groupIdKey="index"
	groupResultsKey="hits"
	resultsClass="py-2 pl-4"
	headerCenterComponent={selectedResult ? PokemonHeaderCenter : undefined}
	contentComponent={selectedResult ? PokemonContent : undefined}
>
	<PokemonHeaderLeft bind:selectedResult slot="headerLeft" />
	<PokemonHeaderRight slot="headerRight" {selectedResult} bind:isOpen bind:query />
	<PokemonEmptySearch slot="emptySearch" />
	<PokemonNoResult slot="noResults" />
	<PokemonFooter slot="footer" {selectedResult} />
	<PokemonGroup slot="groupHeader" let:group {group} />
	<PokemonItem slot="result" let:result let:selected {result} {selected} />
</SvelteSpotlight>

<style>
	:global(.sl-results::-webkit-scrollbar) {
		width: 0.75rem;
		background-color: white;
	}

	:global(.sl-results::-webkit-scrollbar-thumb) {
		background: rgb(226 232 240 /1);
	}

	:global(html[data-theme='dark'] .sl-results::-webkit-scrollbar) {
		background-color: #2a303c;
	}

	:global(html[data-theme='dark'] .sl-results::-webkit-scrollbar-thumb) {
		background-color: #242933;
	}
</style>
