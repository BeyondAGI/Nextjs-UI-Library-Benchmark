import '../styles/globals.css'
import Layout from './components/layout'
import { NextUIProvider } from '@nextui-org/react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {

  // 2. Extend the theme to include custom colors, fonts, etc
  const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }

  const theme = extendTheme({ colors })

  return (
    <ChakraProvider theme={theme}>
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </ChakraProvider>
  )
}

export default MyApp
