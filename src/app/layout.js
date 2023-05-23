import './globals.css'
import { Inter } from 'next/font/google'
import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blogging Web Application',
  description: 'Learn more about the performance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TopBar/>
      {children}
      </body>
    </html>
  )
}
