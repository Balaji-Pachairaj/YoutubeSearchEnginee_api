const { default: axios } = require("axios");
const { YOUTUBE_API_ENPOINTS, MAX_RESULTS, YOUTUBE_KIND } = require("./config");

const fetchYoutubeVideos = async (parameters) => {
  const { searchQuery, videosCount } = parameters;
  let fetchVideosCount = videosCount;
  let nextPageToken = null;
  let results = [];
  do {
    let resultsCount =
      fetchVideosCount > MAX_RESULTS ? MAX_RESULTS : fetchVideosCount;
    fetchVideosCount -= resultsCount;
    let url = new URL(YOUTUBE_API_ENPOINTS.SEARCH);
    url.searchParams.append("part", "id,snippet");
    url.searchParams.append("type", "video");
    url.searchParams.append("maxResults", resultsCount);
    url.searchParams.append("q", searchQuery);
    url.searchParams.append("key", process.env.API_KEY);
    if (nextPageToken) {
      url.searchParams.append("pageToken", nextPageToken);
    }
    let response = await axios.get(url);
    console.log(fetchVideosCount)
    nextPageToken = response.data.nextPageToken;
    results = results.concat(response.data.items);
  } while (fetchVideosCount > 0);
  return results;
};

module.exports = {
  fetchYoutubeVideos,
};
