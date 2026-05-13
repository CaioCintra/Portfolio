export default function Header() {
    return (
      <header>
        <div className="w-full h-16 sm:h-20 z-50 bg-gradient-to-r from-violet-950 to-violet-900 flex items-center flex-wrap justify-center fixed top-0 shadow-lg shadow-violet-900/20 backdrop-blur-sm">
          <p className="font-bold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-violet-400">Portfólio</p>
        </div>
      </header>
    );
  }