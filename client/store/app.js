export const state = () => ({
    isSideBarOpen: false,
    currPath: localStorage.getItem('currPath') || 'dashboard',
});

export const mutations = {
    toggleCollapse(state) {
        state.isSideBarOpen = !state.isSideBarOpen;
    },
    onSideBarClick(state, index) {
        state.currPath = index;
        localStorage.setItem('currPath', index);
    },
};
