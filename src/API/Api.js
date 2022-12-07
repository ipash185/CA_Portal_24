import axios from "axios";

const devUrl = "http://localhost:5000"
const productionUrl = "https://cap-backend-production-2e18.up.railway.app/caApi"

const Api = axios.create({
 baseURL: productionUrl,
});

export default Api;
