<script>
	const slots = [
		{
			name: '',
			description: '',
			props: []
		},
		{
			name: '',
			description: '',
			props: []
		},
		{
			name: '',
			description: '',
			props: []
		},
		{
			name: '',
			description: '',
			props: []
		},
		{
			name: '',
			description: '',
			props: []
		},
		{
			name: '',
			description: '',
			props: []
		},
		{
			name: '',
			description: '',
			props: []
		},
		{
			name: '',
			description: '',
			props: []
		}
	];
</script>

<h2 id="slots">Slots</h2>

<div class="overflow-x-auto">
	<table class="table table-zebra text-sm  w-full">
		<!-- head -->
		<thead>
			<tr>
				<th>Prop</th>
				<th>Description</th>
				<th>Type</th>
				<th>Default</th>
			</tr>
		</thead>
		<tbody>
			{#each slots as { name }}
				<tr>
					<td>{name}</td>
					<!-- <td>{description}</td>
						<td>{type}</td>
						<td>{defaultValue}</td> -->
				</tr>
			{/each}
		</tbody>
	</table>
</div>
