import { Github, Mail, LayoutTemplate } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-200">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 py-12 flex justify-between items-center">
        <h1 className="text-xl font-medium tracking-tight flex items-center gap-2">
          <LayoutTemplate size={24} className="text-neutral-400" />
          My Static Site
        </h1>
        <nav className="flex gap-6 text-sm font-medium text-neutral-500">
          <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
          <a href="#features" className="hover:text-neutral-900 transition-colors">Features</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight max-w-2xl mb-6">
          A clean, modern space for your next big idea.
        </h2>
        <p className="text-lg text-neutral-500 max-w-xl mb-10 leading-relaxed">
          This is a static-ready React template. You can easily edit the JSX (which looks and acts exactly like HTML) directly in the code editor, and host it on GitHub Pages.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors">
            Get Started
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white border border-neutral-200 text-neutral-900 rounded-full font-medium hover:bg-neutral-50 transition-colors flex items-center gap-2">
            <Github size={18} />
            View GitHub
          </a>
        </div>

        {/* Features Section */}
        <section id="features" className="mt-32 md:mt-48 grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center mb-6">
              <LayoutTemplate size={20} className="text-neutral-700" />
            </div>
            <h3 className="text-lg font-medium mb-3">HTML-Like Syntax</h3>
            <p className="text-neutral-500 leading-relaxed">
              Just update the text and tags in the <code>App.tsx</code> file. It feels exactly like writing standard HTML.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center mb-6">
              <Github size={20} className="text-neutral-700" />
            </div>
            <h3 className="text-lg font-medium mb-3">GitHub Pages Ready</h3>
            <p className="text-neutral-500 leading-relaxed">
              Export this project to GitHub. When built, it generates static HTML, CSS, and JS files perfect for free hosting.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center mb-6">
              <Mail size={20} className="text-neutral-700" />
            </div>
            <h3 className="text-lg font-medium mb-3">Fast & Responsive</h3>
            <p className="text-neutral-500 leading-relaxed">
              Styled with Tailwind CSS utilities right in the class attributes, making it fully responsive on any device.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-neutral-200 mt-24">
        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} My Static Site. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors text-sm font-medium">Twitter</a>
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors text-sm font-medium">GitHub</a>
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors text-sm font-medium">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
