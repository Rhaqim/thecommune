import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
    colors: {
        brand: {
            900: "#1a365d",
            100: "#5e99cc"
        },
        neutral: {
            900: "#1a365d",
            100: "#5e99cc"
        },
        success: {
            900: "#1a365d",
            100: "#5e99cc"
        }
    },
    fonts: {
        body: "Roboto, system-ui, sans-serif",
        heading: "Roboto, system-ui, sans-serif",
        monospace: "Menlo, monospace",
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    components: {
        Heading: {
            variants: {
                'section-title': {
                    textDecoration: 'underline',
                    fontSize: 20,
                    textUnderlineOffset: 6,
                    textDecorationColor: '#525252',
                    textDecorationThickness: 4,
                    marginTop: 3,
                    marginBottom: 4
                }
            }
        }
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true
    }
});

export default theme;

