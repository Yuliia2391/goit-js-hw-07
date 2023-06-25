import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listItems = document.querySelector('.gallery');

function createMarkupGalleryItems() {
    return galleryItems.map(({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}"
            />
        </a>
    </li>
    `)
    .join('');
}

listItems.insertAdjacentHTML('beforeend', createMarkupGalleryItems());

let gallery = new SimpleLightbox('.gallery__item a',
    {
        captionsData: 'alt',
        captionDelay: 250,
    });