import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8983/solr/CDataCore",
  headers: {
    "Content-type": "application/json",
    "Orgin":"http://localhost:8081/"
  }
});