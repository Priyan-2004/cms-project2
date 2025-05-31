import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-indigo-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">AniList</Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-indigo-300 transition">Home</Link>
          <Link to="/catalog" className="hover:text-indigo-300 transition">Catalog</Link>
          <Link to="/about" className="hover:text-indigo-300 transition">About</Link>
        </div>
      </div>
    </nav>
  );
}