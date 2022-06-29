import { ChakraProvider } from '@chakra-ui/react'
import defaultTheme from '../defaultTheme'
import Banner from '../components/Banner'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Banner>
        <Component {...pageProps} />
      </Banner>
    </ChakraProvider>
  )
}

export default MyApp