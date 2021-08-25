/**
 * Overmind
 * 
 * @see https://overmindjs.org/views/react
 */
import {
    createStateHook,
    createActionsHook,
    createEffectsHook,
    createReactionHook
} from 'overmind-react';

import * as actions from './actions';
import * as effects from './effects';
import state from './state';

const config = {
    state,
    actions,
    effects
};

export const useAppState = createStateHook();
export const useActions = createActionsHook();
export const useEffects = createEffectsHook();
export const useReaction = createReactionHook();

export default config;