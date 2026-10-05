import '../styles.css'
import { Kantumruy_Pro } from 'next/font/google'

const kantumruy = Kantumruy_Pro({
  subsets: ['khmer', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={kantumruy.className}>
      <Component {...pageProps} />
      <style jsx global>{`
        html, body, *, button, input, select, textarea {
          font-family: ${kantumruy.style.fontFamily}, sans-serif !important;
        }
      `}</style>
    </div>
  )
}