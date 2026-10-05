import '../styles.css' // ឬ style.css ប្រសិនបើមាន
import { Kantumruy_Pro } from 'next/font/google'

const kantumruy = Kantumruy_Pro({
  subsets: ['khmer', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={kantumruy.className}>
      <Component {...pageProps} />
    </main>
  )
}