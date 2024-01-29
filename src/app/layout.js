import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import SearchBox from '@/components/SearchBox'
import './globals.css'

export const metadata = {
  title: 'IMDb: Ratings, Reviews',
  description: 'NextJS app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar/>
          <SearchBox/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
