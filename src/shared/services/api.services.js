import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },
  getToken() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.token;
  },
  setHeader() {
    axios.defaults.headers.common.Authorization = `JWT ${this.getToken()}`;
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  get(resource) {
    return axios.get(resource);
  },

  post(resource, data, config) {
    return axios.post(resource, data, config);
  },

  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   * */
  customRequest(data) {
    return axios(data);
  },
};

export default ApiService;
