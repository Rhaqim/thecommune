import { ChakraProvider } from '@chakra-ui/react'
import defaultTheme from '../defaultTheme'
import Banner from '../components/Banner'
import Fonts from '../fonts'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Fonts />
      <Banner router={router}>
        <Component {...pageProps} />
      </Banner>
    </ChakraProvider>
  )
}

export default MyApp