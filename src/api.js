import axios from "axios";

const API_KEY = "y9lFkcMPKb5-cvSJK9MVbovuAa4IDN7N64cLcO-PfJw";
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${API_KEY}`
  );

  return data;
};