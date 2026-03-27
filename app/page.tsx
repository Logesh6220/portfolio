export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen px-6 py-10">

      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Logesh T</h1>
        <p className="mt-4 text-lg text-gray-400">
          Machine Learning Engineer | Full Stack Developer
        </p>
      </section>

      {/* About */}
      <section className="max-w-3xl mx-auto py-10">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400">
          I build intelligent systems like MediVoyage — a machine learning-based
          traveller health risk assessment platform.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-xl font-bold">MediVoyage</h3>
          <p className="text-gray-400 mt-2">
            Personalized traveller health risk prediction using ML models,
            climate data, and regional disease analysis.
          </p>
        </div>

      </section>

      {/* Contact */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-400 mt-2">logeshthambiran@gmail.com</p>
      </section>

    </main>
  );
}