<script>
	import Table from '../Table.svelte';
	const group = [
		{
			group: 'default',
			keys: ['description', 'type', 'defaultValue'],
			props: [
				{
					name: 'isOpen',
					description: 'Whether to spotlight is open',
					type: 'boolean',
					defaultValue: 'false'
				},
				{
					name: 'results',
					description: 'A flat array of result or a one level deep array of grouped results',
					type: 'R[]',
					defaultValue: '[]'
				},
				{
					name: 'groupResultsKey',
					description:
						'If the results are grouped, you want to define the key of the nested results',
					type: 'GK extends ConditionalKeys<R, any[]>',
					defaultValue: ''
				},
				{
					name: 'groupIdKey',
					description: 'The key to find the ID of a group in order to keyed the each loop',
					type: 'ConditionalKeys<R, string | number>',
					defaultValue: ''
				},
				{
					name: 'resultIdKey',
					description: 'The key to find the ID of a result in order to keyed the each loop',
					type: `GroupedResult extends string
		? ConditionalKeys<R, string | number>
		: ConditionalKeys<GroupedResult, string | number>`,
					defaultValue: ''
				},
				{
					name: 'cleanQueryOnClose',
					description:
						'Whether to clean query on close. This option also clean the preselected result and the selected result',
					type: 'boolean',
					defaultValue: 'false'
				},
				{
					name: 'distanceFromTop',
					description: 'The top distance where the spotlight will be fixed',
					type: 'number',
					defaultValue: '100'
				},
				{
					name: 'searchPlaceholder',
					description: 'The input placeholder',
					type: 'string',
					defaultValue: 'Search'
				},
				{
					name: 'query',
					description: 'The current value of the search input',
					type: 'string',
					defaultValue: '""'
				},
				{
					name: 'preSelectedResult',
					description: 'The current result that is preselected by the keyboard navigation',
					type: 'Result',
					defaultValue: ''
				},
				{
					name: 'selectedResult',
					description:
						'The current selected result either after hitting "Enter" or by clicking on it',
					type: 'Result',
					defaultValue: ''
				},
				{
					name: 'isFocused',
					description: 'Whether the search input is focused',
					type: 'boolean',
					defaultValue: 'false'
				},
				{
					name: 'listElement',
					description: ' HTML element type for the the result list',
					type: 'string',
					defaultValue: 'ul'
				},
				{
					name: 'resultElement',
					description: 'HTML element type for the result element',
					type: 'string',
					defaultValue: 'li'
				}
			]
		},

		{
			group: 'Animations',
			keys: ['description', 'defaultValue'],
			props: [
				{
					name: 'overlayTransition',
					description: 'The svelte-transition to animate the overlay',
					defaultValue: 'fade'
				},
				{
					name: 'overlayTransitionConfig',
					description: 'Config for the overlay aimation',
					defaultValue: '{ duration : 200 }'
				},
				{
					name: 'modalTransitionIn',
					description: 'The svelte-transition to animate the modal on enter',
					defaultValue: 'scale'
				},
				{
					name: 'modalTransitionInConfig',
					description: 'Config for the modal enter aimation',
					defaultValue: '{ start: 0.95 }'
				},
				{
					name: 'modalTransitionOut',
					description: 'The svelte-transition to animate the modal on exit',
					defaultValue: 'scale'
				},
				{
					name: 'modalTransitionOutConfig',
					description: 'Config for the modal exit aimation',
					defaultValue: '{ start: 0.95 }'
				}
			]
		},
		{
			group: 'Classes',
			keys: ['description', 'type'],
			props: [
				{
					name: 'overlayClass',
					description: 'The overlay class',
					type: 'string'
				},
				{
					name: 'modalClass',
					description: 'The modal class',
					type: 'string'
				},
				{
					name: 'headerClass',
					description: 'The modal header class',
					type: 'string'
				},
				{
					name: 'inputClass',
					description: 'The input class',
					type: 'string'
				},
				{
					name: 'contentClass',
					description: 'The modal content container class',
					type: 'string'
				},
				{
					name: 'resultsClass',
					description: 'The modal results container class',
					type: 'string'
				},
				{
					name: 'footerClass',
					description: 'The modal footer class',
					type: 'string'
				}
			]
		},
		{
			group: 'Dynamic slots',
			keys: ['description', 'type'],
			props: [
				{
					name: 'headerCenterComponent',
					description:
						"Optional header center component to replace the default input. We don't use a slot here because it's impossible to define a conditional slot, and  you don't want to display this component all the time. It's useful if you want to simulate some sort of navigation inside the spotlight component",
					type: 'Svelte component'
				},
				{
					name: 'contentComponent',
					description:
						"Optional content component to replace the default result list. We don't use a slot here because it's impossible to define a conditional slot, and  you don't want to display this component all the time. It's useful if you want to simulate some sort of navigation inside the spotlight component",
					type: 'Svelte component'
				}
			]
		}
	];
</script>

<h2 id="props">Props</h2>
<Table {group} />
