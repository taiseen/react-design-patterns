import { useEffect, useState } from "react";
import jsonData from "../db/movies.json";

const withDataFetching = (WrappedComponent) => {
  // Return the HOC

  return function WithDataFetchingComponent(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          setLoading(true);

          // const url = `${import.meta.env.VITE_API_BASE_URL}/api/movies`;
          // const res = await fetch(url);
          // if (!res.ok) throw new Error("Failed to fetch data");
          // const result = await res();
          // setData(result);

          const result = await new Promise((resolve) => {
            setTimeout(() => {
              resolve(jsonData);
            }, 2000);
          });

          setData([...result.movies]);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }

      fetchData();
    }, []);

    if (loading)
      return (
        <p className="text-yellow-500 text-center p-2 border rounded mb-4">
          Loading data...
        </p>
      );

    if (error)
      return <p className="text-red-500 text-center p-2">Error: {error}</p>;

    // Pass the fetched data down as a prop
    return <WrappedComponent data={data} {...props} />;
  };
};

export default withDataFetching;
