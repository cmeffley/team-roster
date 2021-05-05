import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTeam = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/player.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getTeam;
