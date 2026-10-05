import '../styles.css'
import { Noto_Sans_Khmer } from 'next/font/google'

const notoSansKhmer = Noto_Sans_Khmer({
  subsets: ['khmer'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-khmer',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={notoSansKhmer.className}>
      <Component {...pageProps} />
    </main>
  )
}