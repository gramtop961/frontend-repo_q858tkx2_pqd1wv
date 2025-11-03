import Hero from './components/Hero';
import ProgramTracks from './components/ProgramTracks';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-black" />
            <span className="text-sm font-semibold tracking-tight text-gray-900">Elevate Learning</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <a href="#programs" className="hover:text-gray-900">Programs</a>
            <a href="#why" className="hover:text-gray-900">Why Us</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <a href="#contact" className="hidden rounded-md bg-black px-4 py-2 text-xs font-medium text-white sm:inline-flex">
            Get Started
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="why">
          <ProgramTracks />
          <WhyUs />
        </div>
        <CTA />
      </main>

      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Elevate Learning. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
