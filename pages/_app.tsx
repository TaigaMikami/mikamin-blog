import '@/styles/globals.scss'
import '@/styles/prism.scss'
import type { AppProps } from 'next/app'
import LayoutWrapper from '@/components/LayoutWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}

export default MyApp
