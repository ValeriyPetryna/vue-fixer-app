import axios from 'axios';

const ApiService = {

    init(baseURL) {
        axios.defaults.baseURL = baseURL;
        this.setHeader();
    },

    setHeader() {
        axios.defaults.headers.common["Authorization"] = `JWT ${this.getToken()}`
    },

    getToken() {
        let user = JSON.parse(localStorage.getItem('user'));
        return user.token
    },

    get(resource) {
        return axios.get(resource)
    }
}


export default ApiService;