import axios from "axios";

const instance = axios.create({
  baseURL: "https://character-creator-react.firebaseio.com/"
});

export default instance;
