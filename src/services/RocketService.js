import axios from 'axios';

const SERVICES_URL = 'https://api.spacexdata.com/v3';
const rocketURL = `${SERVICES_URL}/rockets`;

const api = axios.create();

const rocketService = {
  get: (rocket) => api.get(`${rocketURL}/${rocket}`)
};

export default rocketService;
