import axios from "axios";

// Set up Axios instance
const API = axios.create({
  baseURL: process.env.API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
