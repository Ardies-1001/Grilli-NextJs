import Meta from '@/components/partials/Meta'
import Topbar from '@/components/partials/Topbar'
import Header from '@/components/partials/Header'
import Footer from '@/components/partials/Footer'
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body id="top">
        <Topbar />
        <Header />
        <main>
            <article>
                {children}
            </article>
        </main>
        <Footer />      
        <Script src="./assets/js/script.js"></Script>
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
      </body>
    </html>
  )
}
