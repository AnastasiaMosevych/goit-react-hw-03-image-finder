const BASIC_URL = "https://pixabay.com/api/";
const API_KEY = "33266337-e4c6780c1f261ccee8f95a294";

export const getImagesApi = (searchText, queryPage) => {
  const imagesPerPage = 12;
  return fetch(`${BASIC_URL}?q=${searchText}&page=${queryPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${imagesPerPage}`)
}
