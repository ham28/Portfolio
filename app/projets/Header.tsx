import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-gray-200 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/projets" className="hover:text-gray-400">Projets</Link></li>
            <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}