import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

let query = ''; 
let page = 1;   
const perPage = 15; 


loadMoreBtn.style.display = 'none';

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSubmit(event) {
    event.preventDefault();

    query = event.currentTarget.elements['search-text'].value.trim();
    page = 1; 

    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search term!',
        });
        return;
    }

    gallery.innerHTML = '';
    loadMoreBtn.style.display = 'none'; 
    loader.style.display = 'block';
console.log(loader);
    try {
        const images = await fetchImages(query, page, perPage);

        if (images.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, no images found. Try again!',
            });
            return;
        }

        renderGallery(images);
        loadMoreBtn.style.display = 'block'; 
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please try again later.',
        });
    } finally {
        loader.style.display = 'none';
    }
}

async function onLoadMore() {
  page += 1;
  loader.style.display = 'block';
  try {
    const images = await fetchImages(query, page, perPage);
    console.log('Fetched images for next page:', images);

    if (images.length === 0) {
      iziToast.info({
        title: 'Info',
        message: 'No more images to load.',
      });
      loadMoreBtn.style.display = 'none';
      return;
    }

  
    const markup = images
      .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<li class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${likes}</p>
            <p><b>Views:</b> ${views}</p>
            <p><b>Comments:</b> ${comments}</p>
            <p><b>Downloads:</b> ${downloads}</p>
          </div>
        </li>`;
      })
      .join('');

    gallery.insertAdjacentHTML('beforeend', markup); 
    const galleryItem = gallery.querySelector('.gallery-item');
    const cardHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth', 
    });
    if (page * perPage >= totalHits) {
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
      loadMoreBtn.style.display = 'none'; 
    } else {
      renderGallery(images, gallery);  
    }
    lightbox.refresh(); 

    console.log('Images added to gallery');
  } catch (error) {
    
  } finally {
    loader.style.display = 'none';
  }
}