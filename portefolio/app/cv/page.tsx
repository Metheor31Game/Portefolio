import Head from "next/head";

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>CV - Mathéo VIGNERES</title>
        <meta
          name="description"
          content="CV de Mathéo VIGNERES, étudiant en informatique."
        />
      </Head>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Mon CV
          </h2>
          <div className="mt-6 border-2 border-primary rounded-lg overflow-hidden">
            <iframe
              src="/misc/cv.pdf"
              className="w-full h-[1200px]"
              title="CV de Mathéo VIGNERES"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
