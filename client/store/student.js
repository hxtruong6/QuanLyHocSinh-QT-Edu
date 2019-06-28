export const state = () => ({
    id: localStorage.getItem('studentId') || null,
    isLogined: localStorage.getItem('studentId') ? true : false,
    profile: {},
});

export const mutations = {
    SET_ID: (state, id) => {
        localStorage.setItem('studentId', sId);
        state.id = sId;

    },
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

export const actions = {
    login({ commit }, userInfo) {
        const { sId: studentId, password } = userInfo;
        //TODO: call login to server
        // fake login
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('');
                resolve();
            }, 2000);
            login({ username: username.trim(), password: password })
                .then((response) => {
                    const { data } = response;
                    commit('SET_TOKEN', data.token);
                    setToken(data.token);
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
};
