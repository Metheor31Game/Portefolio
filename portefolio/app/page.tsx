import Head from "next/head";
import Button from "../components/Button";
import { LieuCard } from "../components/LieuCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon Portfolio - Mathéo VIGNERES</title>
        <meta
          name="description"
          content="Portfolio de Mathéo VIGNERES, étudiant en informatique passionné par le développement web."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Section Présentation */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Qui suis-je ?
          </h2>
          <div className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 space-y-4">
            <p>
              Je m'appelle Mathéo VIGNERES et j'ai 20 ans. Actuellement en
              Licence d'informatique, je me spécialise dans la programmation,
              les bases de données et l'algorithmique. Curieux et rigoureux,
              j'aime relever des défis techniques, que ce soit pour mes études
              ou mes projets personnels.
            </p>
            <p>
              Les défis que je relève me poussent souvent à apprendre de
              nouvelles technologies, à optimiser des solutions existantes ou à
              concevoir des projets originaux de A à Z.
            </p>
            <p>
              En parallèle, je m’investis dans la vie associative et j’ai une
              forte appétence pour le travail en équipe, la vulgarisation
              scientifique et l’organisation d’événements.
            </p>
          </div>
          <div className="mt-6 border-t-2 border-indigo-700 max-w-3xl mx-auto" />
        </div>
      </div>

      {/* Section Parcours */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Mon Parcours
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Les étapes clés de mon aventure en informatique, de mes premiers pas
            au lycée à ma formation universitaire.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            <LieuCard
              lieu="Lycée Pierre d’Aragon, Muret"
              image="/images/parcours/lycee.jpg"
              description="Baccalauréat Général (2019-2022) avec spécialités NSI et Mathématiques. Mes premiers pas dans le code, où j’ai découvert ma passion pour programmer et résoudre des problèmes."
            />
            <LieuCard
              lieu="Université Champollion, Albi"
              image="/images/parcours/universite.jpeg"
              description="Licence Informatique (2022-Présent). J’explore le développement web, la cybersécurité, les protocoles réseau et l’architecture des ordinateurs, tout en consolidant mes bases en programmation."
            />
          </div>
          <div className="mt-8 text-center">
            <Button href="/projects" text="Découvrir mes projets" />
          </div>
        </div>
      </div>
    </>
  );
}
