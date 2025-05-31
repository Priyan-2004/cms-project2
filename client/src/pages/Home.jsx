import { animeList, popularAnime } from '../data/mockAnime';
import AnimeCard from '../components/AnimeCard';

export default function Home() {
  const featuredAnime = animeList.filter(anime => 
    popularAnime.includes(anime.id)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="bg-indigo-600 text-white p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to AniList</h1>
          <p className="text-xl">Discover your next favorite anime!</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Anime</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAnime.map(anime => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </section>
    </div>
  );
}