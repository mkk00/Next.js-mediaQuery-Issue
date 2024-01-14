import React from "react"
import type { AppProps } from "next/app"
import RootLayout from "./RootLayout"
import "../styles/globals.css"

function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default App
