
  // Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from "./js/pixabay-api";
import { renderGallery } from './js/render-functions';



const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
console.log(loader);

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term!',
    });
    return;
  }
  
  gallery.innerHTML = '';
  loader.style.display = 'block';
  console.log('Loader is shown');

  fetchImages(query)
    .then((images) => {
      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      renderGallery(images); 
    })
    .catch((error) => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
      console.log('Loader is hidden');
    });
}