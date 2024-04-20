import axios from "axios";

export const vuzAPI = axios.create({
  baseURL: "https://dev.edu.gov.kg/vuz/api",
});
