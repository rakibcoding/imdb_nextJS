import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'IMDB',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Header/>
    </html>
  )
}
