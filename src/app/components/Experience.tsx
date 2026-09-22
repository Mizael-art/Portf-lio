import { Briefcase, CheckCircle, Calendar } from 'lucide-react';

interface ExperienceProps {
  theme: 'dark' | 'light';
}

export function Experience({ theme }: ExperienceProps) {
  const highlights = [
    'Diagnóstico de sistemas elétricos e eletrônicos de caminhões',
    'Identificação de falhas elétricas, eletrônicas e em sensores',
    'Análise de chicotes elétricos e circuitos',
    'Diagnóstico e reparo de módulos eletrônicos',
    'Trabalho com sistemas de veículos DAF',
    'Raciocínio lógico e atenção aos detalhes aplicados ao diagnóstico técnico'
  ];

  return (
    <section id="experiencia" className={`px-6 py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Experiência
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className={`p-8 border transition-all hover:shadow-lg hover:shadow-green-500/20 ${
            theme === 'dark'
              ? 'bg-zinc-800/50 border-zinc-700 hover:border-green-500/50'
              : 'bg-white border-gray-200 hover:border-green-500/50'
          }`}>
            <div className="flex items-start gap-4 mb-2">
              <div className="p-3 bg-green-500/10 text-green-500 mt-1">
                <Briefcase size={24} />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Eletromecânico
                </h3>
                <p className={`text-sm mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  FERTRONIC Diagnósticos Diesel
                </p>
                <div className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                  <Calendar size={14} />
                  <span>Desde fevereiro de 2025</span>
                </div>
              </div>
            </div>

            <p className={`mb-6 leading-relaxed mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Atuo com diagnóstico técnico de sistemas elétricos e eletrônicos de veículos pesados,
              identificando falhas, analisando circuitos e reparando módulos eletrônicos. Essa
              experiência prática em diagnóstico e resolução de problemas é a base que estou levando
              para o desenvolvimento de software.
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded ${
                    theme === 'dark' ? 'bg-zinc-900/50' : 'bg-gray-50'
                  }`}
                >
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projetos como experiência */}
          <div className={`mt-6 p-6 border ${
            theme === 'dark'
              ? 'bg-zinc-800/30 border-zinc-700/50'
              : 'bg-gray-50 border-gray-200'
          }`}>
            <p className={`text-sm text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              💡 Atualmente construindo experiência prática através de projetos reais —{' '}
              <button
                onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-green-500 hover:underline"
              >
                ver projetos
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
