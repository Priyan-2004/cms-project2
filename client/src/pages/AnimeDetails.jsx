 
import { useParams } from 'react-router-dom';
import { animeList } from '../data/mockAnime';
import { FaStar, FaCalendarAlt, FaPlayCircle, FaHeart, FaListUl } from 'react-icons/fa';

export default function AnimeDetails() {
  const { id } = useParams();
  const anime = animeList.find(a => a.id === parseInt(id));

  if (!anime) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Anime not found</h2>
        <p className="text-gray-600">The anime you're looking for doesn't exist in our database.</p>
        <a
          href="/catalog"
          className="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Browse Catalog
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center text-sm text-gray-600 mb-6">
        <a href="/" className="hover:text-indigo-600">Home</a>
        <span className="mx-2">/</span>
        <a href="/catalog" className="hover:text-indigo-600">Catalog</a>
        <span className="mx-2">/</span>
        <span className="text-indigo-600 font-medium">{anime.title}</span>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Left Column - Image */}
          <div className="md:w-1/3 p-4">
            <div className="relative overflow-hidden rounded-lg aspect-[2/3]">
              <img
                className="w-full h-full object-cover transition hover:scale-105 duration-300"
                src={anime.image}
                alt={anime.title}
              />
              <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {anime.status}
              </div>
            </div>
           
            {/* Action Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                <FaPlayCircle className="mr-2" /> Watch Now
              </button>
              <button className="flex items-center justify-center bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                <FaHeart className="mr-2" /> Favorite
              </button>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold mb-2">{anime.title}</h1>
           
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-700">
              <div className="flex items-center">
                <FaStar className="text-yellow-500 mr-1" />
                <span className="font-medium">{anime.rating}</span>
              </div>
              <div className="flex items-center">
                <FaPlayCircle className="text-indigo-500 mr-1" />
                <span>{anime.episodes} episodes</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-indigo-500 mr-1" />
                <span>{anime.season}</span>
              </div>
            </div>
           
            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
              {anime.genre.map(g => (
                <span
                  key={g}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {g}
                </span>
              ))}
            </div>
           
            {/* Synopsis */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <FaListUl className="mr-2 text-indigo-500" /> Synopsis
              </h2>
              <p className="text-gray-700 leading-relaxed">{anime.description}</p>
            </div>
           
            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Status:</strong> {anime.status}</li>
                  <li><strong>Episodes:</strong> {anime.episodes}</li>
                  <li><strong>Season:</strong> {anime.season}</li>
                </ul>
              </div>
             
              <div>
                <h3 className="font-semibold text-lg mb-2">Recommendations</h3>
                <p className="text-gray-600">Users who liked this also enjoyed:</p>
                <div className="mt-2 flex space-x-2">
                  {animeList
                    .filter(a => a.id !== anime.id && a.genre.some(g => anime.genre.includes(g)))
                    .slice(0, 3)
                    .map(rec => (
                      <a
                        key={rec.id}
                        href={`/anime/${rec.id}`}
                        className="text-indigo-600 hover:underline text-sm"
                      >
                        {rec.title}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Anime Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Similar Anime</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {animeList
            .filter(a => a.id !== anime.id && a.genre.some(g => anime.genre.includes(g)))
            .slice(0, 5)
            .map(similar => (
              <a
                key={similar.id}
                href={`/anime/${similar.id}`}
                className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={similar.image}
                  alt={similar.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-medium text-sm truncate">{similar.title}</h3>
                  <div className="flex items-center mt-1 text-xs text-gray-600">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span>{similar.rating}</span>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
