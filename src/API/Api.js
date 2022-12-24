import axios from "axios";

const devUrl = "http://localhost:5000"
const productionUrl = "https://ca-backend.onrender.com/caApi"

const Api = axios.create({
 baseURL: productionUrl,
});

export default Api;
