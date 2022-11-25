import axios from "axios";

const API_URL = "http://localhost:5000/api/";


class API {
    post(curs1,curs2,amount1,amount2) {
        return axios.post(API_URL + "post", {
            curs1: curs1,
            curs2: curs2,
            amount1: amount1,
            amount2: amount2
        }, { });
    }

    get() {
        return axios.post(API_URL + "get", {

        }, { });
    }

}
export default new API();
