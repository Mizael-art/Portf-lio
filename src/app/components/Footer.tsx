import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

interface FooterProps {
  theme: 'dark' | 'light';
}

export function Footer({ theme }: FooterProps) {
  return (
    <footer className={`px-6 py-12 border-t ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className={`text-xl mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Mizael Landreis
            </h3>
            <p className="text-gray-400">
              Desenvolvedor Backend em formação
            </p>
            <a
              href="mailto:mizaellandreis2016@gmail.com"
              className="text-gray-400 hover:text-green-500 transition-colors text-sm mt-1 inline-block"
            >
              mizaellandreis2016@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="https://github.com/Mizael-art"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-colors ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-green-500'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mizael-landreis-06b6a039b/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-colors ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-green-500'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/moraes.psd/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-colors ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-green-500'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              <Instagram size={24} />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <div className={`mt-8 pt-6 border-t text-center text-gray-500 ${
          theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'
        }`}>
          <p>© 2026 Mizael Landreis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
