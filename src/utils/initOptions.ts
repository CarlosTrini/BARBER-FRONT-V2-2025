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
export const initIntersectionHeader = () => {
  const navLinks = document.querySelector('#navLinks');
  if (!navLinks) return;

  const options = {
    root: null, // Cambiado para usar viewport
    rootMargin: '100px',
    threshold: 1.0
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      console.log('Visible?', entry.isIntersecting, entry.target);
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(navLinks);
};