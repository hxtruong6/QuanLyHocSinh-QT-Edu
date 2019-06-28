export const state = () => ({
    id: localStorage.getItem('studentId') || null,
    isLogined: localStorage.getItem('studentId') ? true : false,
    profile: {},
});

export const mutations = {
    logIn(state, sId, password) {
        //TODO: call login to server
    },
    signUp(state, sId, password, rePassword) {
        //TODO: call sign to server and save _id
    },
    logOut(state) {
        state.id = null;
        state.isLogined = false;
        localStorage.removeItem('studentId');
    },
    getProfile(state) {
        //TODO: get profile
    },
};
