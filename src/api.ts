import axios from "axios";
import { Photo } from "./types";

const API_KEY: string = "y9lFkcMPKb5-cvSJK9MVbovuAa4IDN7N64cLcO-PfJw";

axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

interface Data {
  results: Photo[];
  total: number;
  total_pages: number;
}

export const getPhotos = async (query: string, page: number): Promise<Data> => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${API_KEY}`
  );
  return data;
};