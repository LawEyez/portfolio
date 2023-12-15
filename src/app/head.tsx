import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>Allen Ojuka</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Fullstack developer from Kenya." />
      <link rel="icon" href="/favicon.ico" />
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3HE1DQV4F7" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-3HE1DQV4F7');
        `}
      </Script>
    </>
  )
}
