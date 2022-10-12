export const theme = {
    color: {
        primaryColor: "#008080",
        removeButton: "#DC143C",
        saveButton: "#DBDC5B",
        toggleButton: "#278A5B",
        backgroundBody: "#E3E3E3",
        backgroundColorsMain: "#F7F5FA", 
        border: "#C0C0C0",
        text: "#3F434B",
    },
    breakpoint: {
        mobile: 767,
    },
};

export const darkTheme = {
    ...theme,
    color: {
        primaryColor: "#BBCC5C",
        removeButton: "#DC143C",
        saveButton: "#DBDC5B",
        toggleButton: "#278A5B",
        backgroundBody: "#30322A",
        backgroundColorsMain: "#43453B",
        border: "#6D7583",
        text: "#E3E3E3",
    },
};