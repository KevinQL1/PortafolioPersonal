import './globals.css'
import ThemeProvider from './components/ThemeProvider'

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Portafolio de desarrollador',
  icons: {
    icon: '/vs_code.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
