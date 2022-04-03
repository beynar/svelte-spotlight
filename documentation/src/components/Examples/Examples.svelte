<script lang="ts">
	import { tailwind, css } from './example';
	import Prism from 'prismjs';
	import 'prism-svelte';
	const tabs = [
		{
			tab: 'Tailwind',

			code: tailwind
		},
		{
			tab: 'CSS',

			code: css
		}
	];
	let currentTab = tabs[0];
</script>

<h2 id="example">Basic example</h2>
<div class="tabs tabs-boxed w-[fit-content]  mb-5">
	{#each tabs as tab}
		<div
			on:click={() => (currentTab = tab)}
			class={`tab ${currentTab.tab === tab.tab ? 'tab-active' : ''}`}
		>
			{tab.tab}
		</div>
	{/each}
</div>
<div class="mockup-code px-5">
	<code class="whitespace-pre">
		{@html Prism.highlight(currentTab.code, Prism.languages.svelte, 'svelte')}
	</code>
</div>

<style>
	code {
		font-size: 12px;
		line-height: 10px !important;
	}
</style>
