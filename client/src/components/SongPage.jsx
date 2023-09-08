import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import ApiMusicPlayer from "./ApiMusicPlayer";

const SongPage = () => {
  const playlist = JSON.parse(localStorage.getItem("playlist"));
  const { id } = useParams();
  let isMounted = true;
  // State to hold the selected song data
  const [selectedSongUrl, setSelectedSongUrl] = useState(null);
  const [songNameFromAPI, setSongNameFromAPI] = useState("");
  const [songImageFromAPI, setSongImageFromAPI] = useState("");
  const [albumNameFromAPI, setAlbumNameFromAPI] = useState("");
  const [artistName, setArtistName] = useState("");

  // Function to open the music player with the selected song
  const openMusicPlayer = (song) => {
    setSelectedSongUrl(song.downloadUrl320kbps);
    setSongNameFromAPI(song.name || ''); // Provide a default value if 'name' is null or undefined
    setSongImageFromAPI(song.image || ''); // Provide a default value if 'album.image' is null or undefined
    setAlbumNameFromAPI(song.albumName || ''); // Provide a default value if 'albumName' is null or undefined
    setArtistName(song.primaryArtists || ''); // Provide a default value if 'primaryArtists' is null or undefined
  };

  // Cleanup function to remove the "playlist" item from localStorage when unmounting
  useEffect(() => {
    return () => {
      localStorage.removeItem("playlist");
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-white">
      <Header />
      <div className="w-96 bg-base-100 shadow-xl mx-auto p-4 mt-8">
        <figure>
          <img src={playlist.playlistImage} alt={playlist.playlistName} className="w-full h-auto text-black" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{playlist.playlistName}</h2>
        </div>
      </div>

      <div className="flow-root mt-4"> {/* Adjust the margin-top to make the playlist card smaller */}
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {playlist.songs.map((song, index) => (
            <li key={index} className="py-2 sm:py-3"> {/* Adjust the padding to make the song cards a bit bigger */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-20 h-20 rounded-full" 
                    src={song.image} // Display the individual song's image
                    alt={`Song ${index + 1}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <button onClick={() => openMusicPlayer(song)}>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-black">
                      {song.name}
                    </p>
                  </button>
                  <p className="text-sm text-gray-500 truncate dark:text-black-400">
                    {song.primaryArtists}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Render the ApiMusicPlayer component conditionally */}
      {selectedSongUrl && (
        <ApiMusicPlayer
          songUrl={selectedSongUrl}
          songNameFromAPI={songNameFromAPI}
          songImageFromAPI={songImageFromAPI}
          albumNameFromAPI={albumNameFromAPI}
          artistName={artistName}
        />
      )}
    </div>
  );
};

export default SongPage;
