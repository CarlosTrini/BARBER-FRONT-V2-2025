import useThemeStore from "../context/themeContext"

export const initTheme = () => {
    const theme = localStorage.getItem('theme') as 'light' | 'dark' || null;
    if (theme) {
        document.body.setAttribute('data-theme', theme);
        useThemeStore.setState({theme: theme});
    } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        useThemeStore.setState({theme: 'light'});
    }
}