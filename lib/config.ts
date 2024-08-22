import axios from "axios";

// Set up Axios instance
const API = axios.create({
  baseURL: "https://gradbudy-frontend.onrender.com" || "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
