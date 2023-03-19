import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <h4 className='text-green-600'>IMDB Clone</h4>
    </main>
  )
}
