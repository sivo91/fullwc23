import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">

       <html dangerouslySetInnerHTML={{ __html: '<!--   \n Welcome,  \n Project: IIHF voting app \n Status: Public \n Tools: Next.js, MongoDB \n github repository: \n https://github.com/sivo91/fullwc23  \n Thank you and Happy Coding, Peter \n Lets go Slovakia !!! :) \n -->' }}>
      </html>

      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
