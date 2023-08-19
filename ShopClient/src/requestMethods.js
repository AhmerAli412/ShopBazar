import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWYyYTVhMjY2NWMzOWQzZGI0ZDhkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTM3NTQ2OSwiZXhwIjoxNjcxNjM0NjY5fQ.njuQ7Ybsq5MfjCIyKvI6gd9L5hmW7wWuaVgESMSCyjQ";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });