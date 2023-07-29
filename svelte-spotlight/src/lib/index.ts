import type {
	fade,
	fly,
	scale,
	blur,
	slide,
	BlurParams,
	CrossfadeParams,
	FadeParams,
	ScaleParams,
	SlideParams
} from 'svelte/transition';
import type { RequireExactlyOne } from 'type-fest';

export type Fade = typeof fade;
export type Fly = typeof fly;
export type Scale = typeof scale;
export type Blur = typeof blur;
export type Slide = typeof slide;

export type AnimationFunctions = Fade | Fly | Scale | Blur | Slide;
export type AnimationConfig<T extends AnimationFunctions> = Parameters<T>[1];
export type AnimatingParams = FadeParams & ScaleParams & CrossfadeParams & SlideParams & BlurParams;

export const isCombo = <T extends Combo>(e: KeyboardEvent, combo: T) => {
	if (typeof combo === 'boolean') {
		return;
	} else {
		return combo?.key === e.key && ((combo?.metaKey && e.metaKey) || (combo?.ctrlKey && e.ctrlKey));
	}
};

type defaultSlotProps<Result> = {
	selectedResult: Result | undefined;
	preSelectedResult: Result | undefined;
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
				metaKey?: boolean;
				ctrlKey?: boolean;
			},
			'ctrlKey' | 'metaKey'
	  > & { key: string })
	| boolean;
