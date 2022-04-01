<script>
	import { scale } from 'svelte/transition';
	import IoMdSearch from 'svelte-icons/io/IoMdSearch.svelte';
	import IoMdArrowBack from 'svelte-icons/io/IoMdArrowBack.svelte';
	export let selectedResult;
</script>

<div class="w-10 h-10 text-slate-400   sm:flex hidden">
	{#key !!selectedResult}
		<div
			in:scale={{ delay: 100, duration: 100, start: 0.4 }}
			out:scale={{ duration: 100, start: 0.4 }}
			on:click={selectedResult ? () => (selectedResult = undefined) : null}
			class={`w-10 h-10 p-2 text-slate-400  sm:flex hidden ${
				selectedResult ? 'cursor-pointer' : ''
			} `}
		>
			<svelte:component this={selectedResult ? IoMdArrowBack : IoMdSearch} />
		</div>
	{/key}
</div>
