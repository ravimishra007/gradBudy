import axios from "axios";

// Set up Axios instance
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
