const localStorageKey = "language";

export const saveLanguageInLocalStorage = language => 
    localStorage.setItem(localStorageKey, JSON.stringify(language));


export const getLanguageFromLocalStorage = () => 
    JSON.parse(localStorage.getItem(localStorageKey)) || false;