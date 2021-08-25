export const incrementCount = ({ state, effects, actions }) => {
    state.count++;
};

export const loadApp = async ({ effects, state }) => {
    state.user = await effects.api.getUser();
};