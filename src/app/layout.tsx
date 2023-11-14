import Footer from '@/components/Footer';
import './globals.css'
import Navbar from "@/components/Navbar";
import ContextProvider from '@/components/ContextProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
        <Navbar />
        {children}
        <Footer />
        </ContextProvider>
      </body>
    </html>
  )
}
