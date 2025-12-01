const MovieList = ({ data = [] }) => {
  return (
    <div className="p-4 text-slate-300">
      <h2 className="text-xl font-bold mb-2">🎞️ Movie List</h2>

      <ul className="space-y-2">
        {data.map((movie) => (
          <li key={movie.id} className="border-b border-slate-500 pb-2">
            {movie.title} <span className="text-slate-500">({movie.year})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
