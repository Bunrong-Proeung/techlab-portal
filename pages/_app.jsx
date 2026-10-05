import { Kantumruy_Pro } from 'next/font/google'
import '../styles.css'

const kantumruy = Kantumruy_Pro({
  subsets: ['khmer', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-kantumruy',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html, body, *, button, input, select, textarea {
          font-family: ${kantumruy.style.fontFamily}, system-ui, sans-serif !important;
        }
        code, pre, kbd {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
        }
      `}</style>
      <div className={kantumruy.className}>
        <Component {...pageProps} />
      </div>
    </>
  )
}