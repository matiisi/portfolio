import '../styles/globals.css'
import { ReactElement } from 'react'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}
