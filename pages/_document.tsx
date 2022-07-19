import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'
import React from 'react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <title>Nathan Delanhese | Home</title>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
