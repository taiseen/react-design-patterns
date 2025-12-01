import withDataFetching from "./hoc/withDataFetching";
import MovieAnalytics from "./MovieAnalytics";
import MovieList from "./MovieList";

// Wrap these components by the same HOC...
const MovieAnalyticsWithData = withDataFetching(MovieAnalytics);
const MovieListWithData = withDataFetching(MovieList);

const MovieWithHOCLearn = () => {
  return (
    <div className="max-w-lg mx-auto mt-4">
      <MovieAnalyticsWithData />
      <MovieListWithData />
    </div>
  );
};

export default MovieWithHOCLearn;
