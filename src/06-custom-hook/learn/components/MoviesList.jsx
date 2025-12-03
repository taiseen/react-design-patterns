import useFetch from "../hooks/useFetch";

const MoviesList = () => {
  const url = "https://json-faker.onrender.com/movies";

  const { data, error, loading } = useFetch(url);

  if (loading) return <p className="text-orange-400">Loading movies...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="px-4 py-3 bg-slate-700 rounded">
      <h2 className="text-2xl mb-2">🎬 Movies</h2>

      <ul className="space-y-2">
        {data?.movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} — {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
