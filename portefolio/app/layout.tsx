"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Button from "../components/Button";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Portfolio de Mathéo VIGNERES",
//   description: "Portfolio de Mathéo VIGNERES, étudiant en informatique.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-100`}
      >
        {/* Navigation */}
        <nav className="bg-indigo-700 shadow-lg">
          <div className="mx-auto px-4 sm:px-6 lg:px-15">
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

              {/* Hamburger Button (Mobile) */}
              <div className="flex items-center sm:hidden">
                <button
                  onClick={toggleMenu}
                  aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                  className="text-white hover:text-indigo-200 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

              {/* Liens de navigation et Bouton (Desktop) */}
              <div className="hidden sm:flex sm:items-center sm:space-x-4">
                <div className="sm:ml-6 sm:flex sm:space-x-8">
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
                    className="border-b-2 border-transparent text-white hover:border-indigo-700 hover:text-indigo-200 px-1 pt-1 text-sm font-medium"
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

            {/* Menu Mobile (visible when toggled) */}
            {isMenuOpen && (
              <div className="sm:hidden">
                <div className="flex flex-col space-y-2 px-2 pt-2 pb-3 bg-indigo-700">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:bg-indigo-800 hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Accueil
                  </Link>
                  <Link
                    href="/projet-pro"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:bg-indigo-800 hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projet Professionnel
                  </Link>
                  <Link
                    href="/cv"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:bg-indigo-800 hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    CV
                  </Link>
                  <div className="px-3 py-2">
                    <Button
                      href="/projects"
                      text="Mes Projets"
                      size="base"
                      color="green"
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </div>
                </div>
              </div>
            )}
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
