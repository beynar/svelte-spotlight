export const example = `<script lang="ts">
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
modalClass={'w-[600px] max-w-[95%] bg-base-100 shadow-lg overflow-hidden rounded-sm'}
headerClass={'py-3 px-10 border-b-2 border-base-300 border-b-solid'}
inputClass="focus:outline-none bg-transparent"
resultIdKey="title"
on:select={(event) => {
    // DO stuff
}}
>
<div slot="result" let:selected let:result>
    <div
        class={"hover:bg-base-200  cursor-pointer text-sm px-10 py-3 w-full"+selected ? " bg-base-300" : ''}
    >
        {result.title}
        <p class="text-slate-500 text-sm">{result.description}</p>
    </div>
</div>

<div slot="noResults" class="px-10 py-3">
    <p class="text-slate-500 text-sm">No results...</p>
</div>
</SvelteSpotlight>`;
