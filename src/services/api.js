import axios from "axios";

//https://sujeitoprogramador.com/ (base URL)
//r-api/?api=filmes (rota)

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});

export default api;