import axios from "axios";
const TUITER_API_URL = "http://localhost:3000/api/tuits"

export const findAllTuits = async () => {
  const response = await axios.get(TUITER_API_URL);
  return response.data;
};

export const findTuitById = () => {};

export const createTuit = (tuit) => {
  return axios.post(TUITER_API_URL, tuit);
};

export const updateTuit = (newTuit) => {
  return axios.put(`${TUITER_API_URL}/${newTuit.id}`, newTuit);
};

export const deleteTuit = (id) => {
  return axios.delete(`${TUITER_API_URL}/${id}`);
};
