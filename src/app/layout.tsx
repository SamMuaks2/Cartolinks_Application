import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });


// export const metadata = {
//   title: 'Mohri Cartolinks Application',
//   description: 'Pixel-like UI built with Next.js + Tailwind',
// }


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html >
  )
}