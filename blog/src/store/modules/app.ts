interface stateInter {
    isPhone: boolean,
    showMenu: boolean,
    [propname: string]: any,
}

const state = {
    isPhone: false,
    showMenu: false
}

const mutations = {
    IS_PHONE: (state: stateInter, isPhone: boolean) => {
        state.isPhone = isPhone
    },
    SHOW_MENU: (state: stateInter, showMenu: boolean) => {
        state.showMenu = showMenu
    }

}

const actions = {
    // saveUserName({ commit }, username) {
    //     commit('SAVE_USERNAME', username)
    // }
    isPhone({ commit }, isPhone) {
        commit('IS_PHONE', isPhone)
    },
    showMenu({ commit }, showMenu) {
        commit("SHOW_MENU", showMenu)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
