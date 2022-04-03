export const tailwind = `<script lang="ts">
import SvelteSpotlight from 'svelte-spotlight';
import { matchSorter } from 'match-sorter';
let query = "";
let items = [
    {
        title: 'Hit 1',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
    },
    {
        title: 'Hit 2',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
    },
    {
        title: 'Hit 3',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
    },
    {
        title: 'Hit 4',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
    }
];
$: results = matchSorter(items, query, { keys: ['title'] });
</script>

<SvelteSpotlight
    {results}
    bind:query
    modalClass={'w-[600px] max-w-[95%] bg-white shadow-lg rounded-sm'}
    headerClass={'py-3 px-10 border-b-2 border-slate-100 border-b-solid'}
    inputClass="focus:outline-none bg-transparent"
    resultIdKey="title"
    on:select={(event) => {
    // DO stuff
    }}
>
    <div slot="result" let:selected let:result class={"hover:bg-slate-100 cursor-pointer text-sm px-10 py-3 w-full" + selected ? "bg-slate-100" : ''}>
        {result.title}
        <p class="text-slate-500 text-sm">{result.description}</p>
    </div>

    <div slot="noResults" class="px-10 py-3 text-slate-500 text-sm">
        No results...
    </div>
</SvelteSpotlight>`;
export const css = `<script lang="ts">
import SvelteSpotlight from 'svelte-spotlight';
import { matchSorter } from 'match-sorter';
let query = "";
let items = [
    {
        title: 'Hit 1',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
    },
    {
        title: 'Hit 2',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
    },
    {
        title: 'Hit 3',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
    },
    {
        title: 'Hit 4',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
    }
];
$: results = matchSorter(items, query, { keys: ['title'] });
</script>

<SvelteSpotlight
	{results}
	bind:query
	resultIdKey="title"
    on:select={(event) => {
        // DO stuff
    }}
>
	<div data-selected={selected} class="result" slot="result" let:selected let:result>
		{result.title}
		<p>{result.description}</p>
	</div>

	<div slot="noResults" class="noResults">
		No results...
	</div>
</SvelteSpotlight>

<style>
	.result {
		cursor: pointer;
		font-size: 14px;
		padding-left: 2.5rem;
		padding-right: 2.5rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		width: 100%;
		color: black;
	}
    .noResults,
	.result p {
		color: gray;
		font-size: 12px;
	}
	.result:hover,
	.result[data-selected='true'] {
		background: whitesmoke;
	}
    .noResults{
        padding-left: 2.5rem;
		padding-right: 2.5rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
    }
	:global(.sl-modal) {
		width: 600px;
		max-width: 95%;
		background: white;
		box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
		border-radius: 0.1rem;
	}

	:global(.sl-header) {
		padding-left: 2.5rem;
		padding-right: 2.5rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		border-bottom: 2px whitesmoke solid;
	}

	:global(.sl-input) {
		outline: none;
		background: transparent;
		color: #000000;
	}
</style>`;
