import { Github, Eye, Code2 } from 'lucide-react';

interface ProjectsProps {
  theme: 'dark' | 'light';
}

export function Projects({ theme }: ProjectsProps) {
  const pythonProjects = [
    {
      name: 'Estudos em Python',
      description: 'Repositório com exercícios práticos focados em lógica de programação, estruturas de controle e fundamentos de Python.',
      github: 'https://github.com/Mizael-art/Python-Fundamentos',
      demo: null,
      featured: false
    },
    {
      name: 'Sistema de Notas de Alunos',
      description: 'Script em Python para gerenciamento de notas de alunos, utilizando listas e estruturas condicionais.',
      github: 'https://github.com/Mizael-art/Python-Fundamentos/blob/main/dia%207/listaalunos.py',
      demo: null,
      featured: false
    },
    {
      name: 'Sistema de Produtos (Loja)',
      description: 'Sistema simples em Python para controle de produtos, com foco em lógica e manipulação de dados.',
      github: 'https://github.com/Mizael-art/Python-Fundamentos/blob/main/dia%2010/loja.py',
      demo: null,
      featured: false
    }
  ];

  const webProjects = [
    {
      name: 'Sistema de CRUD de Produtos com Flask',
      description: 'Aplicação web desenvolvida com Flask para gerenciamento completo de produtos, incluindo criação, leitura, atualização e exclusão (CRUD). Backend em Python com banco de dados integrado.',
      demo: 'https://sistema-de-crud-de-produtos-com-flask.onrender.com',
      github: 'https://github.com/Mizael-art/Sistema-de-CRUD-de-Produtos-com-Flask',
      featured: true
    },
    {
      name: 'FinFinance – Controle Financeiro com IA',
      description: 'Sistema de controle financeiro que utiliza Inteligência Artificial para organização e análise de dados.',
      demo: 'https://mizael-art.github.io/FinFinancesBr/',
      github: 'https://github.com/Mizael-art/FinFinancesBr',
      featured: true
    },
    {
      name: 'Sistema de Controle de Validade de Produtos',
      description: 'Aplicação desenvolvida para controle de produtos com datas de vencimento. Permite cadastrar produtos (inclusive iguais com datas diferentes), visualizar itens próximos do vencimento e possui sistema interno de alerta que notifica quando faltam duas semanas para vencer.',
      demo: 'https://mizael-art.github.io/Farmacia/',
      github: 'https://github.com/Mizael-art/Farmacia',
      featured: true
    },
    {
      name: 'FinFinance – Landing Page',
      description: 'Página de vendas desenvolvida para apresentação e conversão do produto FinFinance.',
      demo: 'https://finfinance-landing.vercel.app',
      github: 'https://github.com/Mizael-art/LandingFinFinance',
      featured: false
    },
    {
      name: 'Página de Obrigado (Pós-venda)',
      description: 'Página de confirmação após compra, focada na experiência do usuário.',
      demo: 'https://fin-finance-obrigado.vercel.app',
      github: null,
      featured: false
    }
  ];

  return (
    <section id="projetos" className={`px-6 py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Projetos
        </h2>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="text-green-500" size={28} />
            <h3 className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Projetos com Python
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pythonProjects.map((project, index) => (
              <div
                key={index}
                className={`p-6 border transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20 ${
                  theme === 'dark'
                    ? 'bg-zinc-800/50 border-zinc-700 hover:border-green-500/50'
                    : 'bg-white border-gray-200 hover:border-green-500/50'
                }`}
              >
                <h4 className={`text-lg mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {project.name}
                </h4>
                <p className={`mb-6 leading-relaxed min-h-[80px] text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-green-500 text-green-500 hover:bg-green-500/10 px-4 py-2.5 transition-all w-full"
                >
                  <Github size={18} />
                  Ver Código
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="text-green-500" size={28} />
            <h3 className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Projetos com IA / Web
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {webProjects.map((project, index) => (
              <div
                key={index}
                className={`p-6 border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/20 ${
                  project.featured ? 'md:col-span-2' : ''
                } ${
                  theme === 'dark'
                    ? 'bg-zinc-800/50 border-zinc-700 hover:border-green-500/50'
                    : 'bg-white border-gray-200 hover:border-green-500/50'
                }`}
              >
                <h4 className={`text-xl mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {project.name}
                </h4>
                <p className={`mb-6 leading-relaxed ${project.featured ? 'min-h-[60px]' : 'min-h-[80px]'} ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {project.description}
                </p>
                <div className="flex gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black px-4 py-2.5 transition-all hover:shadow-lg hover:shadow-green-500/50"
                    >
                      <Eye size={18} />
                      Ver Projeto
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border border-green-500 text-green-500 hover:bg-green-500/10 px-4 py-2.5 transition-all"
                    >
                      <Github size={18} />
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
