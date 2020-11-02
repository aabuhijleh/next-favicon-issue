import { ChakraProvider } from '@chakra-ui/core'
import theme from '../theme'
import { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
