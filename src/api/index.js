import axios from "axios";
import { apiURL } from "../utils";
// TODO Change the case to a type/enum

async function api(type, payload) {
  switch (type) {
    case "GETREVIEWSBYID": {
      const params = new URLSearchParams(payload);
      const { data } = await axios.get(`${apiURL}/getReviews`, {
        params,
      });
      return data;
    }
    case "GETFILMSALL": {
      const params = new URLSearchParams(payload);
      const { data } = await axios.get(`${apiURL}/getFilms`, {
        params,
      });
      return data;
    }
    case "ADDREVIEW": {
      const { data } = await axios.post(`${apiURL}/addReview`, payload);
      return data;
    }
    case "ADDFILM": {
      const { data } = await axios.post(`${apiURL}/addFilm`, payload);
      return data;
    }
    case "COUNTFILMSBYID": {
      const params = new URLSearchParams(payload);
      const { data } = await axios.get(`${apiURL}/countFilmsByID`, { params });
      return data;
    }
    case "CALLTMDBAPI": {
      const encodedSearchInput = encodeURI(payload);

      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${encodedSearchInput}&page=1&include_adult=false`
      );

      return data.results;
    }
    default: {
      break;
    }
  }
}

export default api;
