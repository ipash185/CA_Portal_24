import axios from "axios";

const devUrl = "http://localhost:5000"
const productionUrl = "https://cap-ktj-backend.herokuapp.com"

const Api = axios.create({
 baseURL: productionUrl,
});

export default Api;