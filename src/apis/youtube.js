import axios from "axios";

const KEY = "AIzaSyAMu_IkgnWrQIVTwhCz5zVk4Ms0g5edi4c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
