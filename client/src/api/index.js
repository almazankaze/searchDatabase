import axios from "axios";

const myUrl = "http://localhost:5000";

const API = axios.create({ baseURL: myUrl });

export const fetchPosts = () => API.get("/posts");
export const fetchPage = (page) => API.get(`posts/page?page=${page}&limit=8`);
