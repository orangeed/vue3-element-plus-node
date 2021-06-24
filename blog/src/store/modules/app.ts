interface stateInter {
    isPhone: boolean,
    [propname: string]: any,
}

const state = {
    isPhone: false,
}

const mutations = {
    IS_PHONE: (state: stateInter, isPhone: boolean) => {
        state.isPhone = isPhone
    },
    // SAVE_USERNAME: (state: stateInter, username: string) => {
    //     state.username = username
    // }
}

const actions = {
    // saveUserName({ commit }, username) {
    //     commit('SAVE_USERNAME', username)
    // }
    isPhone({ commit }, isPhone) {
        commit('IS_PHONE', isPhone)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
