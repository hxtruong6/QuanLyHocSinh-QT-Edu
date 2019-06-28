export const state = () => ({
    sId: localStorage.getItem('studentId') || null,
    isLogined: localStorage.getItem('studentId') ? true : false,
    profile: {},
});

export const mutations = {
    SET_ID: (state, sId) => {
        localStorage.setItem('studentId', sId);
        state.sId = sId;
        state.isLogined = true;
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
        // call api (get from database)
        // this.profile = dataStudent
    },
    updateProfile(state, student) {
        const { fullName, birthday, address } = student;
        // TODO: update database
        // if success -> update state.profile
        // if faild ->> updated faild
        // await this.$axios
        // .patch('students/' + state.id, {
        //     body: {fullName: fullName, birthday: birthday, address:address}
        // }).then((res) =>
        // {}).catch(err=> {})
    },
};

const S_ID = '1612899';
const PASSWORD = '1234';

export const actions = {
    login({ commit }, userInfo) {
        const { username: sId, password } = userInfo;

        //TODO: call login to server
        // fake login
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (sId !== S_ID || password !== PASSWORD) {
                    reject('Tài khoản không chính xác!');
                    return;
                }
                commit('SET_ID', sId);
                resolve();
            }, 2000);
        });
    },
};
