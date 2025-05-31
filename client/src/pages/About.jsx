export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About AniList</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          AniList is a demo anime website built with React and Tailwind CSS.
        </p>
        <p className="mb-4">
          This project was created to practice React concepts like components, 
          props, and routing without relying on external APIs.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Responsive design</li>
          <li>Anime catalog browsing</li>
          <li>Detailed anime pages</li>
          <li>Clean, modern UI</li>
        </ul>
      </div>
    </div>
  );
}
