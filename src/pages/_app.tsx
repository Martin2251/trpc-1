import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { withTRPC } from '@trpc/next'


 function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withTRPC({
  
})
