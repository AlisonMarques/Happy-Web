// aqui será feito a config da conexao do frontend com o backend

import axios from "axios";

const api = axios.create({
   baseURL: "http://localhost:3333",
});

export default api;
