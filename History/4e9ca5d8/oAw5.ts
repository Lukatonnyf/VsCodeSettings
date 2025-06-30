import axios from "axios";

export const api = axios.create({
  // se der erro, mudar para https
  baseURL: 'https://fraganciadivina-freelancer.onrender.com'
})
