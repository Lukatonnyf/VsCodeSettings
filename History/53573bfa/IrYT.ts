import axios from "axios";

export const api = axios.create({
  // se der erro, mudar para https
  baseURL: 'http://localhost:3333'
})
