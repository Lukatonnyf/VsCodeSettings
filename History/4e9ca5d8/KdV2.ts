import axios from "axios";

export const api = axios.create({
  // se der erro, mudar para https
  baseURL: 'https://fraganciadivina-freelancer.onrender.com'
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na API:", error.message);
    if (error.response) {
      console.error("Dados da resposta:", error.response.data);
      console.error("Status da resposta:", error.response.status);
    }
    return Promise.reject(error);
  }
);
