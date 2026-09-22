import { Github, Folder, Linkedin } from 'lucide-react';
import profileImage from '../../imports/profile.jpeg';

interface HeroProps {
  theme: 'dark' | 'light';
}

export function Hero({ theme }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 animate-fade-in">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className={`text-5xl md:text-6xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Mizael Landreis
            </h1>
            <h2 className="text-2xl md:text-3xl text-green-500">
              Desenvolvedor Backend em formação
            </h2>
          </div>

          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Desenvolvedor backend em formação, focado em Python, automação e resolução de problemas.
            Construindo sistemas práticos e evoluindo constantemente com projetos reais.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/Mizael-art"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-6 py-3 transition-all hover:shadow-lg hover:shadow-green-500/50 font-medium"
            >
              <Github size={20} />
              Ver GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mizael-landreis-06b6a039b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-green-500 text-green-500 hover:bg-green-500/10 px-6 py-3 transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <button
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 border border-zinc-600 text-gray-400 hover:text-green-500 hover:border-green-500/50 px-6 py-3 transition-all"
            >
              <Folder size={20} />
              Ver Projetos
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full animate-pulse-slow"></div>
            <img
              src={profileImage}
              alt="Mizael Landreis"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-green-500/30 shadow-2xl shadow-green-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
