import axios from "axios";

const api = axios.create({
  // se der erro, mudar para https
  baseURL: 'https://localhost:3333'
})
