import React, { ReactElement } from 'react'

import '../styles/globals.css'

import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps): ReactElement => <Component {...pageProps} />

export default App
