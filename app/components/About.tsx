export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Sobre mí</h2>
        <div className="mt-8 p-6 rounded-lg shadow-lg inline-block">
          <p className="leading-relaxed">
            Soy Ingeniero Informático en formación, actualmente en espera de
            graduación. Cuento con más de 4 años de experiencia en el
            desarrollo de aplicaciones web y soluciones empresariales,
            trabajando tanto en entornos cloud como en entornos on-premise con
            servidores físicos. Actualmente me desempeño como Analista de
            Desarrollo, donde participo en la creación e integración de
            microservicios, pruebas unitarias y de integración con Jest, además
            de despliegues automatizados mediante CI/CD pipelines. Tengo
            experiencia en el uso de Node.js, Serverless, DynamoDB, JavaScript
            y servicios de AWS como Lambda, CloudFormation, API Gateway,
            CloudWatch y S3, entre otros.
          </p>
          <p className="leading-relaxed mt-4">
            Me caracteriza la capacidad de adaptarme rápidamente a nuevos
            entornos y tecnologías, junto con un fuerte interés por seguir
            aprendiendo y aplicar buenas prácticas de desarrollo para construir
            soluciones escalables, eficientes y seguras.
          </p>
          <p className="leading-relaxed mt-4">
            Si quieres saber más sobre mí...
          </p>
          <p className="leading-relaxed mt-4">
            <a
              href="/CV-KevinAlexanderQuinteroLondono.pdf"
              download
              className="hover:text-blue-700 hover:underline"
            >
              👉 descárgame 👈
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
