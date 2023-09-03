const API_KEY = "4200a5c11c770b4bba8e4ab5503e5c55"; // Replace with your Last.fm API key

// Fetch top tracks from Last.fm
export async function fetchTopTracks() {
  try {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`
    );
    const data = await response.json();
    return data.tracks.track;
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    return [];
  }
}