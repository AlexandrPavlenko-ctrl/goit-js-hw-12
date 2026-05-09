import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let query = '';
let page = 1;
const PER_PAGE = 100;

const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more-btn');

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();
  
  query = event.currentTarget.elements['search-text'].value.trim();
  if (!query) {
    iziToast.warning({ message: "Please enter a search query" });
    return;
  }

  page = 1;
  clearGallery();
  hideLoadMoreButton();
  
  await fetchImages();
  form.reset();
}

async function onLoadMore() {
  page += 1;
  hideLoadMoreButton(); 
  await fetchImages();
  smoothScroll();
}

async function fetchImages() {
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    
    if (data.hits.length === 0) {
      hideLoadMoreButton();
      iziToast.error({ message: 'Sorry, no images found. Try again!' });
      return;
    }

    createGallery(data.hits);

    
    const totalPages = Math.ceil(data.totalHits / PER_PAGE);
    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
    } else {
      showLoadMoreButton();
    }
    
  } catch (error) {
    iziToast.error({ message: 'Error fetching images!' });
    hideLoadMoreButton();
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const firstCard = document.querySelector('.gallery-item');
  if (firstCard) {
    const { height: cardHeight } = firstCard.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}