import axios from "axios";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import Notiflix from 'notiflix';


const refs = {
    form: document.querySelector('.search-form'),
    input: document.querySelector('.input[name="searchQuery"]'),
    searchBtn: document.querySelector('.search-form button'),
    gallery: document.querySelector('.gallery .container'),
    loadMoreBtn: document.querySelector('.load-more'),
};

function fetchImages(searchQuery, page) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '32938656-2ecc428f3e31b420503b0c66d';
    const options = 'image_type=photo&orientation=horizontal&safesearch=true';

    return axios.get(`${BASE_URL}?key=${KEY}&q=${searchQuery}&${options}&per_page=40&page=${page}`);
};

function autoScroll() {
const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: "smooth",
});
};
