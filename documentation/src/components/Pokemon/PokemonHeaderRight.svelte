<script>
	export let selectedResult;
	export let query;
	export let isOpen;
</script>

<div class="p-2 flex space-x-2">
	{#if query.length && !selectedResult}
		<button on:click={() => (query = '')}>
			<kbd class="kbd kbd-sm">✗</kbd>
		</button>
	{/if}

	<button on:click={() => (isOpen = false)}>
		<kbd class="kbd kbd-sm">esc</kbd>
	</button>
</div>
