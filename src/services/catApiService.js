import axios from "axios";

const searchLimit = 5;

export default axios.create({
  baseURL: `https://api.thecatapi.com/v1/images/search?limit=${searchLimit}`,
});
