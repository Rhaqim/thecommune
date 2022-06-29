import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props),
            color: mode('#202023', '#f0e7db')(props),
            fontFamily: 'M PLUS Rounded 1c',
        }
    })
}

const components = {
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
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3,
            fontFamily: 'Menlo, monospace'
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'",
    body: "Roboto, system-ui, sans-serif",
    monospace: "Menlo, monospace",
}

const colors = {
    grassTeal: '#88ccca',
    brand: {
        900: "#1a365d",
        100: "#5e99cc"
    },
    text: {
        900: "#1a365d",
        100: "#5e99cc"
    }
}

const fontWeights = {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors, fontWeights })

export default theme

