import axios from "axios";
import { apiURL } from "../utils";
// TODO Change the case to a type/enum

async function api(type, payload) {
  const params = new URLSearchParams(payload);

  switch (type) {
    case "GETREVIEWSBYID": {
      const { data } = await axios.get(`${apiURL}/getReviews`, {
        params,
      });
      return data;
    }
    case "GETFILMSALL": {
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
    default: {
      break;
    }
  }
}

export default api;
