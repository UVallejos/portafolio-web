import { Inter} from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

const vina_Sans = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UVallejoS Portafolio',
  description: 'Portfolio de Proyectos Web de Ulises Antonio Vallejos Salgado',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={vina_Sans.className}>{children}<Analytics /></body>

    </html>
  )
}
