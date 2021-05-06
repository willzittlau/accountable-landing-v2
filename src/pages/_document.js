import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            rel="preload"
            href="/fonts/D-DIN-Bold.otf"
            as="font"
            crossOrigin=""
          />
          {/*mailchimp*/}
          <script id="mcjs">
            !function(c,h,i,m,p)
            {
              ((m = c.createElement(h)),
              (p = c.getElementsByTagName(h)[0]),
              (m.async = 1),
              (m.src = i),
              p.parentNode.insertBefore(m, p))
            }
            (document,"script","https://chimpstatic.com/mcjs-connected/js/users/48162a270c3eabb026c9e3be0/6c634a006c6793fb2aac5cb8d.js");
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
