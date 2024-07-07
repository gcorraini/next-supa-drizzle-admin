'use client'

//import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/ui/styles/globals.css";
import { usePathname } from "next/navigation";

//const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Cubata",
//   description: "Cubata Landing",
// };

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //${inter.className}
  const pathName = usePathname();

  return (
    <html lang="en" className="h-auto">
      <head>
        <title>Cubata</title>
        <meta name="description" content="Cubata Landing" />
      </head>
      <body className={`d-flex text-center text-white bg-dark`}>
        {/* <div>This is LandingLayout</div> */}
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <h3 className="float-md-start mb-0">Cubata</h3>
              <nav className="nav nav-masthead justify-content-center float-md-end">
                <a className={`nav-link ${pathName === '/' ? 'active' : ''}`} aria-current="page" href="/">Home</a>
                <a className={`nav-link ${pathName === '/about' ? 'active' : ''}`} href="/about">About</a>
                <a className={`nav-link`} href="/dash">Dashboard</a>
              </nav>
            </div>
          </header>

          <main className="px-3">
            {children}
          </main>

          <footer className="mt-auto text-white-50">
            <p>Powered by <code className="font-monospace">Caffeine</code> | Made by  <a href="https://gcorr.dev/" className="text-decoration-none text-white">Gustavo A.</a></p>
          </footer>
        </div>
      </body>
    </html>
  );
}