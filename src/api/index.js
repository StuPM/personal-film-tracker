import axios from "axios";
// TODO Store URL somewhere more secure
// TODO Change the case to a type/enum

async function api(type, payload) {
  const params = new URLSearchParams(payload);

  switch (type) {
    case "GETREVIEWSBYID": {
      const { data } = await axios.get(`http://127.0.0.1:8888/getReviews`, {
        params,
      });
      return data;
    }
    case "GETFILMSALL": {
      const { data } = await axios.get(`http://127.0.0.1:8888/getFilms`, {
        params,
      });
      return data;
    }
    case "ADDREVIEW": {
      const { data } = await axios.post(
        `http://127.0.0.1:8888/addReview`,
        payload
      );
      return data;
    }
    default: {
      break;
    }
  }
}

export default api;
