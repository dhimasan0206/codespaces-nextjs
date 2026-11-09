import { SpeedInsights } from '@vercel/speed-insights/next'
import '../global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  )
}
