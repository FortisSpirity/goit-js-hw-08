
import { galleryItems } from './gallery-items';


import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = createImgGallery(galleryItems);

galleryContainer.style.listStyleType = 'none';

function createImgGallery (gallery) {
    return gallery.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                style="list-style-type: none"
                src='${preview}'
                alt='${description}'
                />
            </a>
        </li>`
    }).join('');
}


galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const createdLightModal = new SimpleLightbox('.gallery a', {
    
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250
});

