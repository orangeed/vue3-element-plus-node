interface stateInter {
    isPhone: boolean,
    showMenu: boolean,
    [propname: string]: any,
}

const state = {
    isPhone: false,
    showMenu: false,
    titleInfo: {
        title: "",
        author: '',
        createTime: '',
        changeTime: ''
    }
}

const mutations = {
    IS_PHONE: (state: stateInter, isPhone: boolean) => {
        state.isPhone = isPhone
    },
    SHOW_MENU: (state: stateInter, showMenu: boolean) => {
        state.showMenu = showMenu
    },
    SET_TITLEINFO: (state: stateInter, titleInfo: object) => {
        state.titleInfo = titleInfo
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
    },
    setTitleInfo({ commit }, titleInfo) {
        commit('SET_TITLEINFO', titleInfo)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
