import { Code, Database, Wrench, Sparkles } from 'lucide-react';

interface SkillsProps {
  theme: 'dark' | 'light';
}

export function Skills({ theme }: SkillsProps) {
  const skillCategories = [
    {
      icon: Code,
      title: 'Backend',
      skills: ['Java (Básico/Intermediário) — foco principal', 'Spring Boot (em estudo)', 'Python (Intermediário)', 'APIs REST']
    },
    {
      icon: Database,
      title: 'Dados',
      skills: ['SQL', 'PostgreSQL', 'Supabase', 'Power BI']
    },
    {
      icon: Wrench,
      title: 'Web & Ferramentas',
      skills: ['React / Next.js', 'TypeScript / JavaScript', 'HTML / CSS / Tailwind', 'Git, GitHub e Vercel']
    },
    {
      icon: Sparkles,
      title: 'Diferenciais',
      skills: ['Diagnóstico e resolução de problemas técnicos', 'Raciocínio lógico aplicado', 'Automação com Python', 'IA aplicada (Gemini, Copilot)']
    }
  ];

  return (
    <section id="skills" className={`px-6 py-20 ${theme === 'dark' ? 'bg-zinc-900/50' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Habilidades
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`p-6 border transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20 ${
                  theme === 'dark'
                    ? 'bg-zinc-800/50 border-zinc-700 hover:border-green-500/50'
                    : 'bg-white border-gray-200 hover:border-green-500/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/10 text-green-500">
                    <Icon size={24} />
                  </div>
                  <h3 className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
