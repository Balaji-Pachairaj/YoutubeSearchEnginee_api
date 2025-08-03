const { fetchYoutubeVideos } = require("../youtubeServices/search");

const searchGetController = async (req, res) => {
  let params = req.query;
  try {
    const { searchQuery, videosCount } = params;
    if (!searchQuery || !videosCount) {
      return res.status(400).json({
        error: "Missing required parameters: searchQuery or videosCount",
      });
    }
    const videos = await fetchYoutubeVideos({ searchQuery, videosCount });
    res.status(200).json(videos);
  } catch (err) {
    console.error("Error fetching YouTube videos:", err);
    res.status(500).json({ error: "Internal Server Error in controller" });
  }
};

module.exports = {
  searchGetController,
};
