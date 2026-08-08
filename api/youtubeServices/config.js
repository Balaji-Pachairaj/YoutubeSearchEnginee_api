const DOMAIN = process.env.YOUTUBE_DOMAIN || "https://youtube.googleapis.com";

const YOUTUBE_API_ENPOINTS = {
  SEARCH: DOMAIN + "/youtube/v3/search",
};

const YOUTUBE_KIND = {
  CHANNEL: "youtube#channel",
  VIDEO: "youtube#video",
  PLAYLIST: "youtube#playlist",
};

const MAX_RESULTS = 50;

module.exports = {
  YOUTUBE_API_ENPOINTS,
  YOUTUBE_KIND,
  MAX_RESULTS,
};
