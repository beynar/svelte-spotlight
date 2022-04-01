import type { fade, fly, scale, blur, slide, BlurParams, CrossfadeParams, FadeParams, ScaleParams, SlideParams } from 'svelte/transition';
import type { RequireExactlyOne } from 'type-fest';
export declare type Fade = typeof fade;
export declare type Fly = typeof fly;
export declare type Scale = typeof scale;
export declare type Blur = typeof blur;
export declare type Slide = typeof slide;
export declare type AnimationFunctions = Fade | Fly | Scale | Blur | Slide;
export declare type AnimationConfig<T extends AnimationFunctions> = Parameters<T>[1];
export declare type AnimatingParams = FadeParams & ScaleParams & CrossfadeParams & SlideParams & BlurParams;
export declare const scrollIntoViewIfNeeded: (target: HTMLLIElement, container: HTMLDivElement) => void;
export declare const isCombo: <T extends Combo>(e: KeyboardEvent, combo: T) => boolean;
declare type defaultSlotProps<Result> = {
    selectedResult: Result;
    preSelectedResult: Result;
    noResults: boolean;
    query: string;
};
export declare type Slots<R, Result> = {
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
export declare type Combo = (RequireExactlyOne<{
    metaKey?: true;
    ctrlKey?: true;
}, 'ctrlKey' | 'metaKey'> & {
    key: string;
}) | boolean;
export {};
