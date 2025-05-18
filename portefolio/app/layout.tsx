import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Button from "../components/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio de Mathéo VIGNERES",
  description:
    "Portfolio de Mathéo VIGNERES, étudiant en informatique passionné par le développement web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-100`}
      >
        {/* Navigation */}
        <nav className="bg-indigo-700 shadow-lg">
          <div className="mx-auto px-4 sm:px-6 lg:px-20">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo et Titre */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-xl font-bold text-white">
                    Mathéo VIGNERES
                  </h1>
                  <p className="text-sm text-indigo-200">
                    Étudiant en informatique
                  </p>
                </div>
              </div>

              {/* Liens de navigation et Bouton */}
              <div className="flex items-center space-x-4">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    href="/"
                    className="border-b-2 border-transparent text-white hover:border-indigo-700 hover:text-indigo-200 px-1 pt-1 text-sm font-medium"
                  >
                    Accueil
                  </Link>
                  <Link
                    href="/projet-pro"
                    className="border-b-2 border-transparent text-white hover:border-indigo-700 hover:text-indigo-200 px-1 pt-1 text-sm font-medium"
                  >
                    Projet Professionnel
                  </Link>
                  <Link
                    href="/cv"
                    className="border-b-2 border-transparent text-white hover:border-white hover:text-indigo-200 px-1 pt-1 text-sm font-medium"
                  >
                    CV
                  </Link>
                </div>
                <Button
                  href="/projects"
                  text="Mes Projets"
                  size="base"
                  color="green"
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Contenu des pages */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-base text-gray-400">
              © 2025 Mathéo VIGNERES. Tous droits réservés.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
