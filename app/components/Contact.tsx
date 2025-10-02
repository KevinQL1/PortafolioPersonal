export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Contáctame</h2>
        <div className="flex justify-center space-x-6">
          <a href="mailto:kevinquintero045@gmail.com" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Escríbeme
          </a>
          <a href="https://www.linkedin.com/in/kevinquinterolondono/" target="_blank" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-200 transition">
            LinkedIn
          </a>
          <a href="https://github.com/KevinQL1" target="_blank" className="px-6 py-3 border border-gray-600 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
