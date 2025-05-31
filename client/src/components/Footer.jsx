export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-6 mt-10">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} AniList - A demo anime website</p>
          <p className="text-gray-400 text-sm mt-2">
            Created with React and Tailwind CSS
          </p>
        </div>
      </footer>
    );
  }