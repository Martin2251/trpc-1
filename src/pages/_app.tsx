import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { withTRPC } from '@trpc/next'
import { httpBatchLink, loggerLink } from '@trpc/client'
import SuperJSON from 'superjson'


 function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withTRPC({
  config({ctx}) {
  const url = process.env.NEXT_PUBLIC_VERCEL_URL 
    ? `https://${process.env.Next_PUBLIC_VERCEL_URL}/api/trpc`
    : 'http://localhost:3000/api/trpc'

    const links = [
      loggerLink(),
      httpBatchLink({
        maxBatchSize: 10,
        url,
      }),
    ]

    return{
      queryClientConfig:{
        defaultOptions:{
          queries:{
            staleTime:60
          },
        },
      },
      headers(){
        if(ctx?.req){
          return {
            ...ctx.req.headers,
            'x-ssr':'1'
          }
        }
        return{}
      },
      links,
      transformer: SuperJSON
    }
  },
  ssr:false
})
