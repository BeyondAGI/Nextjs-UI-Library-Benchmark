import '../styles/globals.css'
import Layout from '../components/layout'
import { NextUIProvider } from '@nextui-org/react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core';

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
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
      }}
    >
      <ChakraProvider theme={theme}>
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </ChakraProvider>
    </MantineProvider>
  )
}

export default MyApp
