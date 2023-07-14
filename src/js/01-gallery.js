// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const refs = {
    listEl: document.querySelector('.gallery'),
};

function createGalleryItemsMarkup(arr) {
    return arr
        .map(({ preview, original, description }) =>
            `<li class="gallery__item">
       <a class="gallery__link" href="${original}">
       <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}">
  </a>
</li>`
        )
        .join(' ');
}
refs.listEl.insertAdjacentHTML(
    'beforeend',
    createGalleryItemsMarkup(galleryItems));

  const lightbox = new SimpleLightbox('.gallery li a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
