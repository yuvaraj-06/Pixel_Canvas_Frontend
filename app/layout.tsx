import './globals.css'

export const metadata = { title: 'Pixel Canvas', description: 'Immersive 3D Experiences' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="antialiased">{children}</body></html>)
}