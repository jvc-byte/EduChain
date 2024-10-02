import { useEffect, useState } from 'react';
import { videoData } from '../../const'; // Import your video data
import { useLocation } from 'react-router-dom';

interface Video {
    title: string;
    description: string;
}

const SearchResults = () => {
    const [results, setResults] = useState<Video[]>([]);
  const [noResult, setNoResult] = useState(false);

  const query = new URLSearchParams(useLocation().search).get('query') || '';

  useEffect(() => {
    const filteredResults = videoData.filter((video) => 
      video.title.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredResults.length > 0) {
      setResults(filteredResults);
      setNoResult(false);
    } else {
      setResults([]);
      setNoResult(true);
    }
  }, [query]);

  return (
    <div className="p-4">
      {noResult ? (
        <h1 className="text-center text-red-500">No search result</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map((video) => (
            <div key={video.title} className="border p-2">
              <h2 className="font-bold text-xl">{video.title}</h2>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
