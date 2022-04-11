<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { browser } from '$app/env';
	import {
		type AnimationFunctions,
		type AnimationConfig,
		scrollIntoViewIfNeeded,
		isCombo,
		type Slots,
		type Combo
	} from './index';
	import { createEventDispatcher } from 'svelte';
	import type { ConditionalKeys } from 'type-fest';

	type OverlayTransition = $$Generic<AnimationFunctions>;
	type ModalInTransition = $$Generic<AnimationFunctions>;
	type ModalOutTransition = $$Generic<AnimationFunctions>;
	type R = $$Generic<Record<string, any>>;
	type GK = $$Generic<ConditionalKeys<R, any[]>>;
	type GroupedResult = R[GK][number];
	type Result = GroupedResult extends string ? R : GroupedResult;

	type $$Slots = Slots<R, Result>;

	const dispatch = createEventDispatcher<{
		/** Event fired when a result is either clicked or selected with the Enter key. Return the selected item */
		select: Result;
		/** Event fired when user hits the keyboard to navigate inside the spotlight. Return the preselected item */
		navigate: Result;
		/** Event fired when the user is typing inside the search input. Return the query */
		query: string;
	}>();

	let input: HTMLInputElement;
	let content: HTMLDivElement;
	let clientHeight = 0;
	let headerHeight = 0;
	let footerHeight = 0;

	/** The keyboard combo that will open the spotlight */
	export let combo: Combo =
		browser && !/mac/i.test(navigator.platform)
			? { key: 'k', ctrlKey: true }
			: { key: 'k', metaKey: true };

	/** Max search input length */
	export let maxLength = 50;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	export let overlayTransition: OverlayTransition = fade;
	export let overlayTransitionConfig: AnimationConfig<OverlayTransition> = { duration: 200 };
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	export let modalTransitionIn: ModalInTransition = scale;
	export let modalTransitionInConfig: AnimationConfig<ModalInTransition> = {
		start: 0.95
	};
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	export let modalTransitionOut: ModalOutTransition = scale;
	export let modalTransitionOutConfig: AnimationConfig<ModalOutTransition> = {
		start: 0.95
	};
	/** Whether to spotlight is open */
	export let isOpen = false;
	/** A flat array of result or a one level deep array of grouped results */
	export let results: R[] = [];
	/** If the results are grouped, you want to define the key of the nested results */
	export let groupResultsKey: GK = undefined;
	/** The key to find the ID of a group in order to keyed the each loop */
	export let groupIdKey: ConditionalKeys<R, string | number> = undefined;
	/** The key to find the ID of a result in order to keyed the each loop */
	export let resultIdKey: GroupedResult extends string
		? ConditionalKeys<R, string | number>
		: ConditionalKeys<GroupedResult, string | number>;
	/** Whether to clean query on close. This option also clean the preselected result and the selected result */
	export let cleanQueryOnClose = false;
	/** The top distance where the spotlight will be fixed */
	export let distanceFromTop = 100;
	/** The input placeholder */
	export let searchPlaceholder = 'Search';
	/** The current value of the search input  */
	export let query = '';
	/** The current result that is preselected by the keyboard navigation  */
	export let preSelectedResult = undefined;
	/** The current selected result either after hitting "Enter" or by clicking on it */
	export let selectedResult = undefined;
	/** Whether the search input is focused */
	export let isFocused = false;
	/** The overlay class */
	export let overlayClass = '';
	/** The modal class */
	export let modalClass = '';
	/** The modal header class */
	export let headerClass = '';
	/** The input class */
	/** The modal content container class */
	export let inputClass = '';
	export let contentClass = '';
	/** The modal results container class */
	export let resultsClass = '';
	/** The modal footer class */
	export let footerClass = '';
	/** HTML element type for the the result list */
	export let listElement = 'ul';
	/** HTML element type for the result element */
	export let resultElement = 'li';
	/** Optional header center component to replace the default input. We don't use a slot here because it's impossible to define a conditional slot, and  you don't want to display this component all the time. It's useful if you want to simulate some sort of navigation inside the spotlight component */
	export let headerCenterComponent: any = undefined;
	/** Optional content component to replace the default result list. We don't use a slot here because it's impossible to define a conditional slot, and  you don't want to display this component all the time. It's useful if you want to simulate some sort of navigation inside the spotlight component */
	export let contentComponent: any = undefined;

	const toggle = () => (isOpen = !isOpen);
	const setFocus = () => (isFocused = true);
	const resetFocus = () => (isFocused = false);
	const onIntroStart = () => {
		input?.focus();
		if (browser) document.body.style.overflow = 'hidden';
		if (browser) document.body.style.height = '100%';
	};
	const onOutroEnd = () => {
		input?.blur();
		if (browser) document.body.style.overflow = 'auto';
		if (browser) document.body.style.height = 'unset';
		if (cleanQueryOnClose) {
			query = '';
			preSelectedResult = undefined;
			selectedResult = undefined;
		}
	};

	const onKeyDown = (e: KeyboardEvent) => {
		if (isOpen && e.key === 'Escape') {
			isOpen = false;
			return e.preventDefault();
		} else if (isCombo(e, combo)) {
			isOpen = true;
			return e.preventDefault();
		}
		if (!noResults && isOpen && content) {
			const options = Array.from(content.querySelectorAll('li'));
			const current = options.findIndex(
				(element) => element.id === preSelectedResult?.[resultIdKey]
			);
			const selectResult = (position: number) => {
				const element = options[position];
				if (groupIdKey) {
					const group = results.find((group) => group[groupIdKey] === element.parentElement.id);
					preSelectedResult = group[groupResultsKey].find(
						(result) => result[resultIdKey] === element.id
					);
				} else {
					preSelectedResult = results[position];
				}
				scrollIntoViewIfNeeded(element, content);
			};

			if (e.key === 'ArrowDown') {
				e.preventDefault();
				selectResult(current === -1 || current === options.length - 1 ? 0 : current + 1);
			}
			if (e.key === 'ArrowUp') {
				e.preventDefault();
				selectResult(current <= 0 ? options.length - 1 : current - 1);
			}
		}
		if (e.key === 'Enter' && !!preSelectedResult && isOpen) {
			e.preventDefault();
			select(preSelectedResult);
		}
	};

	const select = (item) => {
		selectedResult = item;
		dispatch('select', item);
	};

	$: maxHeight = clientHeight - distanceFromTop * 2 - headerHeight - footerHeight;
	$: noResults = groupResultsKey
		? results.every((result) => result[groupResultsKey].length === 0)
		: results.length === 0;

	$: dispatch('query', query);
	$: dispatch('navigate', preSelectedResult);

	const listProps = (id = 'sl-content') => ({
		// TODO add some attribute for better a11y
		role: 'listbox',
		'aria-labelledby': 'sv-sl',
		id,
		class: 'sl-results-list'
	});
	const optionProps = (id, selected) => ({
		// TODO add some attribute for better a11y
		'aria-labelledby': 'sv-sl',
		role: 'option',
		'aria-selected': selected,
		id,
		class: 'sl-results-item'
	});

	$: defaultProps = {
		selectedResult,
		preSelectedResult,
		noResults,
		query
	};
</script>

<svelte:body on:keydown={onKeyDown} />

{#key isOpen}
	{#if isOpen}
		<div
			bind:clientHeight
			on:click={toggle}
			class={`sl-overlay ${overlayClass}`}
			transition:overlayTransition={overlayTransitionConfig}
		/>
		<div
			role="combobox"
			aria-expanded={isOpen}
			aria-haspopup="listbox"
			aria-labelledby="sv-sl"
			aria-owns="sl-content"
			aria-label="Spotlight"
			style:top={`${distanceFromTop}px`}
			class={`sl-modal ${modalClass}`}
			on:introstart={onIntroStart}
			on:outroend={onOutroEnd}
			in:modalTransitionIn={modalTransitionInConfig}
			out:modalTransitionOut={modalTransitionOutConfig}
		>
			<header bind:clientHeight={headerHeight} class={`sl-header ${headerClass}`}>
				<slot name="headerLeft" {...defaultProps} />

				{#if headerCenterComponent}
					<svelte:component this={headerCenterComponent} {...defaultProps} />
				{:else}
					<input
						aria-autocomplete="list"
						aria-labelledby="sv-sl"
						id="sl-input"
						autocomplete="off"
						autocorrect="off"
						autocapitalize="off"
						spellcheck="false"
						onFocus={setFocus}
						onBlur={resetFocus}
						type="text"
						bind:value={query}
						bind:this={input}
						role="search"
						aria-label={searchPlaceholder}
						aria-controls="sl-content"
						placeholder={searchPlaceholder}
						class={`sl-input ${inputClass}`}
						maxlength={maxLength}
					/>
				{/if}
				<slot name="headerRight" {...defaultProps} />
			</header>
			<div class={`sl-content ${contentClass}`}>
				<div
					bind:this={content}
					class={`sl-results ${resultsClass}`}
					style:max-height={`${maxHeight}px`}
					{...defaultProps}
				>
					{#if headerCenterComponent}
						<svelte:component this={contentComponent} {...defaultProps} />
					{:else}
						<slot name="contentTop" {...defaultProps} />
						{#if query.length === 0 && $$slots.emptySearch}
							<slot name="emptySearch" {...defaultProps} />
						{:else if noResults}
							<slot name="noResults" {...defaultProps} />
						{:else if !noResults}
							{#if groupResultsKey}
								{#each results as group, groupIndex (group[groupIdKey])}
									{@const groupedResults = group[groupResultsKey]}
									{#if groupedResults.length}
										<slot name="groupHeader" {...defaultProps} {group} {groupIndex} />
										<svelte:element this={listElement} {...listProps(group[groupIdKey])}>
											{#each groupedResults as result, index (result[resultIdKey])}
												{@const selected = preSelectedResult?.[resultIdKey] === result[resultIdKey]}
												<svelte:element
													this={resultElement}
													{...optionProps(result[resultIdKey], selected)}
													on:click={() => select(result)}
												>
													<slot name="result" {...defaultProps} {result} {index} {selected} />
												</svelte:element>
											{/each}
										</svelte:element>
									{/if}
								{/each}
							{:else}
								<svelte:element this={listElement} {...listProps()}>
									{#each results as result, index (result[resultIdKey])}
										{@const selected = preSelectedResult?.[resultIdKey] === result[resultIdKey]}
										<svelte:element
											this={resultElement}
											{...optionProps(result[resultIdKey], selected)}
											on:click={() => select(result)}
										>
											<slot name="result" {...defaultProps} {result} {index} {selected} />
										</svelte:element>
									{/each}
								</svelte:element>
							{/if}
						{/if}
						<slot name="contentBottom" {...defaultProps} />
					{/if}
				</div>
				<slot name="sidePanel" {...defaultProps} {maxHeight} />
			</div>
			<footer bind:clientHeight={footerHeight} class={`sl-footer ${footerClass}`}>
				<slot name="footer" {...defaultProps} />
			</footer>
		</div>
	{/if}
{/key}

<slot name="trigger" {...defaultProps} {toggle} />

<style>
	.sl-overlay {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background: black;
		opacity: 0.4;
		display: flex;
		z-index: 100;
		justify-content: center;
	}

	.sl-modal {
		z-index: 110;
		position: fixed;
		height: fit-content;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		display: flex;
		flex-flow: row wrap;
	}

	.sl-header {
		display: flex;
		width: 100%;
	}
	.sl-footer {
		width: 100%;
	}
	.sl-input {
		flex: 1;
	}
	.sl-content {
		flex: 1;
		width: 100%;
		max-width: 100%;
		display: flex;
	}
	.sl-results {
		flex: 1;
		overflow-y: auto;
	}
</style>
