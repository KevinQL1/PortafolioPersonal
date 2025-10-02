export default function Skills() {
  const categories = {
    "Lenguajes de Programación": ["JavaScript", "Java", "SQL"],
    "Frameworks y Librerías": ["React", "Node.js", "Express", "Mongoose", "Tailwind", "SASS", "Next.js", "Bootstrap"],
    "Bases de Datos": ["MongoDB", "DynamoDB", "PostgreSQL", "PG Admin"],
    "Cloud & Infraestructura": ["AWS", "Azure", "Google Cloud", "Firebase", "Serverless", "Hostinger"],
    "Herramientas de Desarrollo": ["Git", "GitHub", "Bitbucket", "Jira", "Postman", "Jest"],
    "Otros": ["Herramientas Ofimáticas"],
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Habilidades</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, skills], index) => (
            <div key={index} className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-center">{category}</h3>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill, i) => (
                  <li
                    key={i}
                    className="p-2 rounded-lg hover:bg-blue-400 hover:text-black transition text-center"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
