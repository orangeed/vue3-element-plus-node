interface stateInter {
    isPhone: boolean,
    showMenu: boolean,
    dialogVisible: boolean,
    [propname: string]: any,
}

const state = {
    isPhone: false,
    showMenu: false,
    dialogVisible: false,
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
    },
    SET_SEARCH: (state: stateInter, dialogVisible: boolean) => {
        state.dialogVisible = dialogVisible
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
    },
    setSearch({ commit }, dialogVisible) {
        commit('SET_SEARCH', dialogVisible)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
