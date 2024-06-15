export default function Layout({ children }) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl">Pokémon Search App</h1>
        </header>
        <main className="flex-1 p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2024 Pokémon
        </footer>
      </div>
    );
  }
  