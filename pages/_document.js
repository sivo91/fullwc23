import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">

       <html dangerouslySetInnerHTML={{ __html: '<!--   \n Welcome,  \n Project: IIHF voting app \n Tools: Next.js, MongoDB \n for more projects, please visit: \n www.charismawebdevelopment.com \n Thank you and Happy Coding, Peter \n Lets go Slovakia !!! :) \n -->' }}>
      </html>

      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
