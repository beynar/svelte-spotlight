<script>
	import AlgoliaLogo from '../AlgoliaLogo.svelte';
	export let selectedResult;
</script>

{#if selectedResult}
	<div />
{:else}
	<div class="flex  sm:justify-between justify-center border-t-[1px] border-t-solid p-4">
		<AlgoliaLogo />
		<div class="space-x-4 sm:flex hidden  ">
			<kbd class="kbd kbd-sm">↓ ↑ To navigate</kbd>
			<kbd class="kbd kbd-sm">↵ To select</kbd>
		</div>
	</div>
{/if}
