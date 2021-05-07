import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTeam = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/player.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addPlayer = (player, user) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/player.json`, player)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/player/${response.data.name}.json`, body)
        .then(() => {
          getTeam(user).then((playerArray) => resolve(playerArray));
        });
    })
    .catch((error) => reject(error));
});

const updatePlayer = (player, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/player/${player.firebaseKey}.json`, player)
    .then(() => getTeam(user)).then((playerArray) => resolve(playerArray))
    .catch((error) => reject(error));
});

export {
  getTeam,
  addPlayer,
  updatePlayer
};
