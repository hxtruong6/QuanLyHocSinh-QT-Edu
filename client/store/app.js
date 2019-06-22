export const state = () => ({
    isSideBarOpen: false,
});

export const mutations = {
    toggleCollapse(state) {
        state.isSideBarOpen = !state.isSideBarOpen;
    },
};
