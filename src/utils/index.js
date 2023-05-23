import axios from "axios";

export const apiURL = `http://127.0.0.1:8888`;

//TODO Move to api file
export const callAPI = async (searchTerm) => {
  const encodedSearchInput = encodeURI(searchTerm);

  const results = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${encodedSearchInput}&page=1&include_adult=false`
  );

  return await results.data.results;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString(`default`, {
    year: `numeric`,
    month: "long",
    day: "numeric",
  });
};
