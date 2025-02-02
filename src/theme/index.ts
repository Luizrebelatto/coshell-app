import { createTheme } from "@shopify/restyle"

const theme = createTheme({
    colors: {
        lightGreen: "#34E0A1",
        mediumGreen: "#2FCA91",
        darkGreen: "#2AB381",
        darkBlue: "#26225F",
        black: "#000000",
        lightGray: "#F8F8F8",
        darkGray: "#4A4863"
    },
    
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40
    },
})

const darkTheme = {
    ...theme,
    colors: {
        lightGreen: "#34E0A1",
        mediumGreen: "#2FCA91",
        darkGreen: "#2AB381",
        darkBlue: "#26225F",
        black: "#000000",
        lightGray: "#F8F8F8",
        darkGray: "#4A4863"
    },
  };

type ThemeProps = typeof theme;

export { theme, ThemeProps, darkTheme } 