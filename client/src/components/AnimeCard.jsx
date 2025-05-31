import { Link } from 'react-router-dom';

export default function AnimeCard({ anime }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-300">
      <Link to={`/anime/${anime.id}`}>
        <img 
          className="w-full h-64 object-cover" 
          src={anime.image} 
          alt={anime.title} 
        />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1 truncate">{anime.title}</h3>
          <div className="flex justify-between items-center">
            <span className="text-yellow-500 flex items-center">
              ★ {anime.rating}
            </span>
            <span className="text-sm text-gray-600">{anime.episodes} eps</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {anime.genre.map(g => (
              <span key={g} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                {g}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}