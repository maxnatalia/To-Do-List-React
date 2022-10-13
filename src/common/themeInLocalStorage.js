export const saveThemeInLocalStorage = darkTheme => 
    localStorage.setItem("theme", JSON.stringify(darkTheme));


export const getThemeFromLocalStorage = () => 
    JSON.parse(localStorage.getItem("theme")) || false;