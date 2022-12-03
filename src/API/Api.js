import axios from "axios";

const devUrl = "http://localhost:5000"
const productionUrl = "https://ktj.in/caApi"

const Api = axios.create({
 baseURL: productionUrl,
});

export default Api;
