export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center"
    >
      <img
        src="/PortafolioPersonal/foto_perfil.jpeg"
        alt="Foto de Kevin"
        className="w-40 h-40 rounded-full border-4 border-blue-400 object-cover mb-20"
      />

      <h1 id="name" className="text-5xl font-bold mb-4">
        ¡Hola, soy Kevin!
      </h1>

      <p className="text-lg max-w-xl">
        Tengo 29 años, vivo en Envigado y me apasiona la programación, así como
        la arquitectura en la nube a nivel empresarial. Voy al gimnasio de lunes
        a sábado y, en mis ratos libres, me gusta aprender nuevas tecnologías.
        Disfruto mantener un estilo de vida activo y equilibrado.
      </p>
    </section>
  );
}