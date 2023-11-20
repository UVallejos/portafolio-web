import { Inter, Neuton, Vina_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const neuton = Inter({ subsets: ['latin'] })
const vina_Sans = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={vina_Sans.className}>{children}</body>
    </html>
  )
}
