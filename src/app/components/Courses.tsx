import { Award, Clock } from 'lucide-react';

interface CoursesProps {
  theme: 'dark' | 'light';
}

export function Courses({ theme }: CoursesProps) {
  const courses: { name: string; hours: number | null; institution: string | null }[] = [
    {
      name: 'Santander Bootcamp Java',
      hours: null,
      institution: 'Santander Open Academy'
    },
    {
      name: 'Santander Bootcamp Java Backend Completo',
      hours: null,
      institution: 'Santander Open Academy'
    },
    {
      name: 'Santander Bootcamp Java + AI / Copilot',
      hours: null,
      institution: 'Santander Open Academy'
    },
    {
      name: 'Power BI',
      hours: 8,
      institution: 'Santander Open Academy'
    },
    {
      name: 'Pensamento Crítico e Resolução de Problemas',
      hours: 8,
      institution: 'Santander Open Academy'
    },
    {
      name: 'Proteção de Dados e Privacidade',
      hours: 8,
      institution: 'Santander Open Academy'
    },
    {
      name: 'Introdução à Programação com Python',
      hours: 8,
      institution: 'Santander Open Academy'
    },
    {
      name: 'Excel Intermediário ao Avançado',
      hours: 8,
      institution: 'Santander Open Academy'
    },
    {
      name: 'IA com Gemini (Google)',
      hours: 8,
      institution: 'Santander Open Academy'
    },
    {
      name: 'Designer de Impacto – IA e Photoshop',
      hours: 16,
      institution: null
    }
  ];

  return (
    <section id="cursos" className={`px-6 py-20 ${theme === 'dark' ? 'bg-zinc-900/50' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Cursos e Certificações
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`p-5 border transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20 ${
                theme === 'dark'
                  ? 'bg-zinc-800/50 border-zinc-700 hover:border-green-500/50'
                  : 'bg-white border-gray-200 hover:border-green-500/50'
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-green-500/10 text-green-500">
                  <Award size={20} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-base leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {course.name}
                  </h3>
                  {course.institution && (
                    <p className="text-sm text-gray-400 mt-1">
                      {course.institution}
                    </p>
                  )}
                </div>
              </div>

              {course.hours && (
                <div className="flex items-center gap-2 text-green-500 text-sm">
                  <Clock size={16} />
                  <span>{course.hours}h de carga horária</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
