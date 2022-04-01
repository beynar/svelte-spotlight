<script lang="ts">
	import { example } from './example';
	import Prism from 'prismjs';
	import 'prism-svelte';
</script>

<h2 id="example">Basic example</h2>

<div class="mockup-code px-5">
	<code class="whitespace-pre">
		{@html Prism.highlight(example, Prism.languages.svelte, 'svelte')}
	</code>
</div>

<style>
	code {
		font-size: 12px;
		line-height: 10px !important;
	}
</style>
