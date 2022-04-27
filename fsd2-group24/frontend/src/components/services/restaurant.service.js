import httpSolr from "../http-solr";
class RestaurantDataService {
    findByName(name) {
        return httpSolr.get(`/select?q=name:${name}`);
    }
}
export default new RestaurantDataService();