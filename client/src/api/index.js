import axios from "axios";

const myUrl = "http://localhost:5000";

const API = axios.create({ baseURL: myUrl });

export const fetchPosts = () => API.get("/posts");
