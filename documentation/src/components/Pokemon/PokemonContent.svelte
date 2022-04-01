<script>
	import { fade } from 'svelte/transition';
	export let selectedResult;
</script>

<div in:fade class="flex items-center justify-center p-14 space-x-3">
	<img
		src={selectedResult.ThumbnailImage}
		alt={selectedResult.ThumbnailAltText}
		class=" bg-base-200 mx-auto rounded-md"
	/>
	<div class="stats stats-vertical shadow">
		<div class="stat">
			<div class="stat-title">Weight</div>
			<div class="stat-value">{selectedResult.weight}</div>
		</div>

		<div class="stat">
			<div class="stat-title">Height</div>
			<div class="stat-value">{selectedResult.height}</div>
		</div>
	</div>
</div>
