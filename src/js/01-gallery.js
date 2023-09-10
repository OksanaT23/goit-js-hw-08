// Описаний в документації
import SimpleLightbox from "simplelightbox";


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryCallback = ({ preview, original, description }) => {
    return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>
        </li>`;
};

const galleryElement = document.querySelector('ul.gallery');
const galleryHtml = galleryItems.map(galleryCallback).join('');

galleryElement.insertAdjacentHTML('beforeend', galleryHtml);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});