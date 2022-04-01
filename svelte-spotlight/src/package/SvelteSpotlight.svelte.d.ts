import { SvelteComponentTyped } from "svelte";
import { type AnimationFunctions, type AnimationConfig, type Slots, type Combo } from './index';
import type { ConditionalKeys } from 'type-fest';
declare class __sveltets_Render<OverlayTransition extends AnimationFunctions, ModalInTransition extends AnimationFunctions, ModalOutTransition extends AnimationFunctions, R extends Record<string, any>, GK extends ConditionalKeys<R, any[]>> {
    props(): {
        /** The keyboard combo that will open the spotlight */ combo?: Combo;
        /** Max search input length */ maxLength?: number;
        overlayTransition?: OverlayTransition;
        overlayTransitionConfig?: AnimationConfig<OverlayTransition>;
        modalTransitionIn?: ModalInTransition;
        modalTransitionInConfig?: AnimationConfig<ModalInTransition>;
        modalTransitionOut?: ModalOutTransition;
        modalTransitionOutConfig?: AnimationConfig<ModalOutTransition>;
        /** Whether to spotlight is open */ isOpen?: boolean;
        /** A flat array of result or a one level deep array of grouped results */ results?: R[];
        /** If the results are grouped, you want to define the key of the nested results */ groupResultsKey?: GK;
        /** The key to find the ID of a group in order to keyed the each loop */ groupIdKey?: NonNullable<{ [Key in keyof R]: R[Key] extends string | number ? Key : never; }[keyof R]>;
        /** The key to find the ID of a result in order to keyed the each loop */ resultIdKey: R[GK][0] extends string ? NonNullable<{ [Key in keyof R]: R[Key] extends string | number ? Key : never; }[keyof R]> : NonNullable<{ [Key_1 in keyof R[GK][0]]: R[GK][0][Key_1] extends string | number ? Key_1 : never; }[keyof R[GK][0]]>;
        /** Whether to clean query on close. This option also clean the preselected result and the selected result */ cleanQueryOnClose?: boolean;
        /** The top distance where the spotlight will be fixed */ distanceFromTop?: number;
        /** The input placeholder */ searchPlaceholder?: string;
        /** The current value of the search input  */ query?: string;
        /** The current result that is preselected by the keyboard navigation  */ preSelectedResult?: any;
        /** The current selected result either after hitting "Enter" or by clicking on it */ selectedResult?: any;
        /** Whether the search input is focused */ isFocused?: boolean;
        /** The overlay class */ overlayClass?: string;
        /** The modal class */ modalClass?: string;
        /** The modal header class */ headerClass?: string;
        /** The modal content container class */ inputClass?: string;
        contentClass?: string;
        /** The modal results container class */ resultsClass?: string;
        /** The modal footer class */ footerClass?: string;
        /** Optional header center component to replace the default input. We don't use a slot here because it's impossible to define a conditional slot, and  you don't want to display this component all the time. It's useful if you want to simulate some sort of navigation inside the spotlight component */ headerCenterComponent?: any;
        /** Optional content component to replace the default result list. We don't use a slot here because it's impossible to define a conditional slot, and  you don't want to display this component all the time. It's useful if you want to simulate some sort of navigation inside the spotlight component */ contentComponent?: any;
    };
    events(): {
        select: CustomEvent<R[GK][0] extends string ? R : R[GK][0]>;
        navigate: CustomEvent<R[GK][0] extends string ? R : R[GK][0]>;
        query: CustomEvent<string>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): Slots<R, R[GK][0] extends string ? R : R[GK][0]>;
}
export declare type SvelteSpotlightProps<OverlayTransition extends AnimationFunctions, ModalInTransition extends AnimationFunctions, ModalOutTransition extends AnimationFunctions, R extends Record<string, any>, GK extends ConditionalKeys<R, any[]>> = ReturnType<__sveltets_Render<OverlayTransition, ModalInTransition, ModalOutTransition, R, GK>['props']>;
export declare type SvelteSpotlightEvents<OverlayTransition extends AnimationFunctions, ModalInTransition extends AnimationFunctions, ModalOutTransition extends AnimationFunctions, R extends Record<string, any>, GK extends ConditionalKeys<R, any[]>> = ReturnType<__sveltets_Render<OverlayTransition, ModalInTransition, ModalOutTransition, R, GK>['events']>;
export declare type SvelteSpotlightSlots<OverlayTransition extends AnimationFunctions, ModalInTransition extends AnimationFunctions, ModalOutTransition extends AnimationFunctions, R extends Record<string, any>, GK extends ConditionalKeys<R, any[]>> = ReturnType<__sveltets_Render<OverlayTransition, ModalInTransition, ModalOutTransition, R, GK>['slots']>;
export default class SvelteSpotlight<OverlayTransition extends AnimationFunctions, ModalInTransition extends AnimationFunctions, ModalOutTransition extends AnimationFunctions, R extends Record<string, any>, GK extends ConditionalKeys<R, any[]>> extends SvelteComponentTyped<SvelteSpotlightProps<OverlayTransition, ModalInTransition, ModalOutTransition, R, GK>, SvelteSpotlightEvents<OverlayTransition, ModalInTransition, ModalOutTransition, R, GK>, SvelteSpotlightSlots<OverlayTransition, ModalInTransition, ModalOutTransition, R, GK>> {
}
export {};
