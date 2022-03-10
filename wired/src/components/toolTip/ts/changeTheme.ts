import { onMounted, reactive } from 'vue'

export const changeTheme = () => {
    const themeData = reactive({
        isDark: false
    })
    const handleChangeThemes = () => {
        themeData.isDark = !themeData.isDark
        if (themeData.isDark) {
            window.document.documentElement.setAttribute('data-theme', 'light')
        } else {
            window.document.documentElement.setAttribute('data-theme', 'dark')
        }
    }
    const handleToTop = () => {
        window.scroll(0, 0)
    }
    onMounted(() => {
        handleChangeThemes()
    })
    return { themeData, handleChangeThemes, handleToTop }
}