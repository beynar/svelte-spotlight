<script>
	export let group;
</script>

{#each group as { group, props, keys, description }}
	{#if group !== 'default'}
		<h4 class="text-3xl mt-10 mb-5">{group}</h4>
		{#if description}
			<p class="mb-5">{description}</p>
		{/if}
	{/if}

	{#if props.length}
		<div class="overflow-x-auto">
			<table class="table w-full">
				<thead class="!bg-base-300">
					<tr>
						<th>Name</th>
						{#each keys as key}
							<th>{key}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each props as props}
						<tr>
							<td><code class="props sm:text-sm !text-[10px]">{props.name}</code> </td>
							{#each keys as key}
								<td>{props[key]}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
{/each}

<style>
	table {
		font-size: 12px;
	}
	td {
		max-width: 50vw;
		white-space: pre-wrap;
	}
</style>
