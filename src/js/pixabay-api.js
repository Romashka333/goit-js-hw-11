import axios from 'axios';

const myKey = "51081544-92eca810e691f95fccf0db9b2";
const url = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: myKey,
    q: query, 
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
  };

  return axios.get(url, { params })
    .then(response => {
      if (response.data.hits.length === 0) {
        throw new Error('Sorry, there are no images matching your search query. Please try again!');
      }
      return response.data; 
    });
}
