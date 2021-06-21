import axios from 'axios';

const getLocations = async () => {
  const url = 'http://127.0.0.1:5000/locations/';
  const response = await axios.get(url);
  return response.data.data;
};

const getLocationData = async (id) => {
  const url = `http://127.0.0.1:5000/locations/${id}`
  const response = await axios.get(url)
  return response.data.data;
}

export default {
  getLocations,
  getLocationData,
};
