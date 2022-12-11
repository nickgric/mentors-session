import axios from 'axios';

const API_KEY = '563492ad6f91700001000001b1212aa69ee44473b58c111103cf8731';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);
  return data;
};

// async function fetchImages(keyWord, page) {
//   const search = `${URL}?q=${keyWord}&${searchParams}&page=${page}&per_page=12`;

//   const response = await axios.get(search);

//   return response.data;
// }

// const ppp = {
//   fetchImages,
// };
// export default ppp;
