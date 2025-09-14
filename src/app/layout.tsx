import './globals.css'
import { ReactNode } from 'react'
// import { ThemeProvider } from "next-themes";

import { ThemeProvider } from 'next-themes'


export const metadata = {
  title: 'Mohri Cartolinks Application',
  description: 'Pixel-like UI built with Next.js + Tailwind',
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}