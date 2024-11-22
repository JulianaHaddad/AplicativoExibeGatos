import axios from "axios";

const searchLimit = 5;

const API_KEY = 'live_Esz9tWf9drxYhW1RE7qm9t6hiNUk4LtqGCSMG0AXG9YACGDIEL1zkq78XOLhfMQb';

export default axios.create({
  headers: {
    'x-api-key': API_KEY,
  },
  baseURL: `https://api.thecatapi.com/v1/images/search?limit=${searchLimit}`,
});
