import type { fade, fly, scale, blur, slide } from 'svelte/transition';
import type { RequireExactlyOne } from 'type-fest';

export type Fade = typeof fade;
export type Fly = typeof fly;
export type Scale = typeof scale;
export type Blur = typeof blur;
export type Slide = typeof slide;

export type AnimationFunctions = Fade | Fly | Scale | Blur | Slide;
export type AnimationConfig<T extends AnimationFunctions> = Parameters<T>[1];

export const scrollIntoViewIfNeeded = (target: HTMLLIElement, container: HTMLDivElement) => {
	const top = target.offsetTop - container.offsetTop;
	if (
		top + target.offsetTop / 2 > container.scrollTop + container.clientHeight ||
		top < container.scrollTop
	)
		target.scrollIntoView({ block: 'center', inline: 'center' });
};

export const isCombo = <T extends Combo>(e: KeyboardEvent, combo: T) => {
	if (typeof combo === 'boolean') {
		return;
	} else {
		return combo?.key === e.key && ((combo?.metaKey && e.metaKey) || (combo?.ctrlKey && e.ctrlKey));
	}
};

type defaultSlotProps<Result> = {
	selectedResult: Result;
	preSelectedResult: Result;
	noResults: boolean;
	query: string;
};
export type Slots<R, Result> = {
	headerLeft: defaultSlotProps<Result>;
	headerRight: defaultSlotProps<Result>;
	contentTop: defaultSlotProps<Result>;
	contentBottom: defaultSlotProps<Result>;
	emptySearch: defaultSlotProps<Result>;
	noResults: defaultSlotProps<Result>;
	groupHeader: defaultSlotProps<Result> & {
		group: R;
		groupIndex: number;
	};
	result: defaultSlotProps<Result> & {
		result: Result;
		selected: boolean;
		index: number;
	};
	sidePanel: defaultSlotProps<Result> & {
		maxHeight: number;
	};
	trigger: defaultSlotProps<Result> & {
		toggle: () => void;
	};
	footer: defaultSlotProps<Result>;
};

export type Combo =
	| (RequireExactlyOne<
			{
				metaKey?: true;
				ctrlKey?: true;
			},
			'ctrlKey' | 'metaKey'
	  > & { key: string })
	| boolean;
