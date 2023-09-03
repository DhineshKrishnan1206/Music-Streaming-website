import React, { useEffect, useState } from 'react';
import Header from './Header';
import { IoSearch } from 'react-icons/io5';
import SongCard from './SongCard';
import ApiMusicPlayer from './ApiMusicPlayer'; // Import the ApiMusicPlayer component

const ApiPage = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [selectedSongUrl, setSelectedSongUrl] = useState(null); // State to store selected song URL

  useEffect(() => {
    const trendingUrl = 'https://saavn.me/modules?language=tamil,telugu';

    // Fetch trending data
    fetch(trendingUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && data.data.albums) {
          setTrendingData(data.data.albums);
        }
      })
      .catch((error) => {
        console.error('Error fetching trending data:', error);
      });
  }, []);

  // Function to handle song card click and update selectedSongUrl
  const handleSongCardClick = (downloadUrl) => {
    setSelectedSongUrl(downloadUrl);
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />

      {/* SearchBar UI */}
      <div className="w-full my-4 h-16 bg-card flex items-center justify-center">
        <div className="w-full gap-4 p-4 md:w-2/3 bg-primary shadow-xl rounded-md flex items-center">
          <IoSearch className="text-2xl text-textColor" />
          <input
            type="text"
            className="w-full h-full bg-transparent text-lg text-textColor border-none outline-none"
            placeholder="Search here ...."
          />
        </div>
      </div>

      {/* Display trending songs using SongCard component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {trendingData.map((album, index) => (
          <SongCard
            key={album.id}
            data={{
              _id: album.id,
              imageURL: album.image.find((img) => img.quality === '500x500').link,
              name: album.name,
              artist: album.artists[0].name,
            }}
            index={index}
            onCardClick={handleSongCardClick} // Pass the click handler
          />
        ))}
      </div>

      {/* Render the ApiMusicPlayer with the selected song URL */}
      {selectedSongUrl && (
        <ApiMusicPlayer 
        songUrl={selectedSongUrl} />
      )}
    </div>
  );
};

export default ApiPage;
