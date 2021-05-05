import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTeam = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/player.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addPlayer = (player) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/player.json`, player)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/player/${response.data.name}.json`, body)
        .then(() => {
          getTeam().then((playerArray) => resolve(playerArray));
        });
    })
    .catch((error) => reject(error));
});

export { getTeam, addPlayer };
