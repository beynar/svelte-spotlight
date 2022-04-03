<script>
	import Table from '../Table.svelte';
	const group = [
		{
			group: 'Default available slot props',
			keys: ['description', 'type', 'defaultValue'],
			props: [
				{
					name: 'selectedResult',
					description:
						'The current selected result either after hitting "Enter" or by clicking on it',
					type: 'Result',
					defaultValue: 'undefined'
				},
				{
					name: 'preSelectedResult',
					description: 'The current result that is preselected by the keyboard navigation',
					type: 'Result',
					defaultValue: 'undefined'
				},
				{
					name: 'noResults',
					description: 'If search results list is empty',
					type: 'boolean',
					defaultValue: 'false'
				},
				{
					name: 'query',
					description: 'The current value of the search input',
					type: 'string',
					defaultValue: "''"
				}
			]
		},
		{
			group: 'headerLeft',
			description: 'Use it to render a search icon or spinner to the left of the input.',
			keys: ['type'],
			props: [
				{ name: 'group', type: 'R' },
				{ name: 'groupIndex', type: 'number' }
			]
		},
		{
			group: 'headerRight',
			description: 'Use it to render a close icon or a clear query button.',
			keys: [],
			props: []
		},
		{
			group: 'contentTop',
			description:
				'Render inside the result container but before the results list, you can use it to display a filtering menu.',
			keys: [],
			props: []
		},
		{
			group: 'contentBottom',
			description:
				'Render inside the result container but after the results list, you can use it to display a load more button.',
			keys: [],
			props: []
		},
		{
			group: 'emptySearch',
			description:
				'Render when query is empty, useful to display some hints. If not provided the results list is shown (or if no result, the noResults slot)',
			keys: [],
			props: []
		},
		{
			group: 'noResults',
			description: 'Render when results list is empty.',
			keys: [],
			props: []
		},
		{
			group: 'groupHeader',
			description: 'If results are grouped you can use this slot to provide segmentation infos.',
			keys: [],
			props: []
		},
		{
			group: 'result',
			description: 'Slot to display the result.',
			keys: ['type'],
			props: [
				{ name: 'result', type: 'Result' },
				{ name: 'selected', type: 'boolean' },
				{ name: 'index', type: 'number' }
			]
		},
		{
			group: 'sidePanel',
			description:
				'Side panel to render to the right of the results container. You can use it to render information about the current preselected result like Raycast does.',
			keys: ['type'],
			props: [{ name: 'maxHeight', type: 'number' }]
		},

		{
			group: 'footer',
			description:
				"Render to the bottom of the modal. You can display some hints here too or the famous 'Search by Algolia' button ",
			keys: [],
			props: []
		},
		{
			group: 'trigger',
			description: 'Slot to render a button that trigger the modal to open.',
			keys: ['type', 'descrition'],
			props: [{ name: 'toggle', type: '() => void', description: 'Open the spotlight.' }]
		}
	];
</script>

<h2 id="slots">Slots</h2>
<Table {group} />
