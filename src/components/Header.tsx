import { XMarkIcon } from "@heroicons/react/24/outline";
import DarkModeToggle from "./DarkModeToggle";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <header className="flex items-center px-4 sm:px-6 lg:px-12 py-3 transition-colors sm:py-5 shadow-md justify-end min-[520px]:justify-between dark:bg-gray-950 dark:text-white">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium hidden min-[520px]:block">
        Ejercicio{" "}
        <a
          href="https://dataiq.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data{" "}
          <span className="bg-gradient-to-b from-green-700 to-green-400 bg-clip-text text-transparent">
            IQ
          </span>
        </a>
      </h1>
      <div className="flex items-center gap-5">
        <div className="w-64 sm:w-80 flex h-8 sm:h-10 rounded-md border bg-white/20 px-3 py-2 text-xs sm:text-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-300">
          <input
            type="text"
            placeholder="Filtra por nombre, email o ciudad..."
            className="flex-grow bg-transparent outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={() => setSearchQuery("")}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
}
