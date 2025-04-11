import './globals.css'
import { EB_Garamond } from 'next/font/google'

const garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  display: 'swap',
})

export const metadata = {
  title: 'QESTOR',
  description: 'Dubitando Veritatem Quaerit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={garamond.variable}>
      <body>{children}</body>
    </html>
  )
}

