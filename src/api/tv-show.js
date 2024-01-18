import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";
export class TVShowAPI {
  static async fetchPopular() {
    const reponse = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    return reponse.data.results;
  }

  static async fetchRecommandations(TVShowId) {
    const reponse = await axios.get(
      `${BASE_URL}tv/${TVShowId}/recommendations${API_KEY_PARAM}`
    );
    return reponse.data.results;
  }
  static async fetchByTitle(title) {
    const reponse = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
    );
    return reponse.data.results;
  }
}
