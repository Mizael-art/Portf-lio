import { Code2, Target, TrendingUp } from 'lucide-react';

interface AboutProps {
  theme: 'dark' | 'light';
}

export function About({ theme }: AboutProps) {
  return (
    <section id="about" className={`px-6 py-20 ${theme === 'dark' ? 'bg-zinc-900/50' : 'bg-gray-100'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Sobre Mim
        </h2>

        <div className="space-y-6">
          <div className={`p-8 border transition-all hover:shadow-lg hover:shadow-green-500/20 ${
            theme === 'dark'
              ? 'bg-zinc-800/50 border-zinc-700'
              : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/10 text-green-500 mt-1">
                <Code2 size={24} />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Transição de Carreira
                </h3>
                <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Formação técnica em Informática, atualmente cursando Engenharia de Software e
                  trabalhando profissionalmente com diagnóstico eletromecânico e eletrônico de veículos
                  pesados. Estou direcionando minha carreira para desenvolvimento de software, com foco
                  em Java e Backend, enquanto desenvolvo projetos próprios utilizando tecnologias modernas.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-6 border transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20 ${
              theme === 'dark'
                ? 'bg-zinc-800/50 border-zinc-700'
                : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-500/10 text-green-500">
                  <Target size={20} />
                </div>
                <h3 className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Foco Atual
                </h3>
              </div>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                Desenvolvimento Backend com Java e Spring Boot, aprofundando Orientação a Objetos,
                SQL e construção de APIs RESTful.
              </p>
            </div>

            <div className={`p-6 border transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20 ${
              theme === 'dark'
                ? 'bg-zinc-800/50 border-zinc-700'
                : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-500/10 text-green-500">
                  <TrendingUp size={20} />
                </div>
                <h3 className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Objetivo
                </h3>
              </div>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                Conseguir minha primeira oportunidade em desenvolvimento — estágio ou vaga júnior em
                Java/Backend — e evoluir constantemente como profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
