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
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>
    `)
    .join('');
}

listItems.insertAdjacentHTML('beforeend', createMarkupGalleryItems());

listItems.addEventListener('click', onItemClick);

function onItemClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    const instance = basicLightbox.create(`
            <img
            src="${evt.target.dataset.source}"
            alt="${evt.target.description}"
            width="800"
            heigt="600"
            >
            `,
        {
            onShow: () => {
                document.addEventListener('keydown', closeOriginalItemEsc)
            },
            onClose: () => {
                document.removeEventListener('keydown', closeOriginalItemEsc)
            },
        });
    
    instance.show();
    
    function closeOriginalItemEsc(evt) {
    if (evt.code === 'Escape') {
        instance.close();
        }
    }
}

    // const instance = basicLightbox.create(`
    //         <img
    //         src="${evt.target.dataset.source}"
    //         alt="${evt.target.description}"
    //         width="800"
    //         heigt="600"
    //         >
    //         `);
    // instance.show();

    // document.addEventListener('keydown', closeOriginalItemEsc);
    
    // function closeOriginalItemEsc(evt) {
    // if (evt.code === 'Escape') {
    //     instance.close();
    // }}
