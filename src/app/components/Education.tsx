import { GraduationCap, Calendar } from 'lucide-react';

interface EducationProps {
  theme: 'dark' | 'light';
}

export function Education({ theme }: EducationProps) {
  const education = [
    {
      degree: 'Engenharia de Software',
      institution: 'Unicesumar',
      period: '2026 – 2030',
      status: 'Em andamento',
      details: ['🎓 Bolsista integral ProUni (100%)', '📚 Atualmente no 2º período']
    },
    {
      degree: 'Técnico em Informática',
      institution: 'Ensino Médio Integrado',
      period: '2020 – 2024',
      status: 'Concluído',
      details: []
    }
  ];

  return (
    <section id="formacao" className={`px-6 py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Formação
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <div
              key={index}
              className={`p-6 border transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20 ${
                theme === 'dark'
                  ? 'bg-zinc-800/50 border-zinc-700 hover:border-green-500/50'
                  : 'bg-white border-gray-200 hover:border-green-500/50'
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-green-500/10 text-green-500">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {item.degree}
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.institution}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Calendar size={16} />
                  <span>{item.period}</span>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  item.status === 'Em andamento'
                    ? 'bg-green-500/10 text-green-500 border border-green-500/30'
                    : theme === 'dark'
                    ? 'bg-zinc-700 text-gray-300'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {item.status}
                </span>
              </div>

              {item.details.length > 0 && (
                <ul className={`mt-3 space-y-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
