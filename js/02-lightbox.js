import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function imageGalleryMarkup(items) {
    return items
        .map((item) => `<li class="gallery__item">
                        <a class="gallery__link" href="${item.original}">
                            <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
                        </a>
                    </li>`
        )
        .join(" ");
};

galleryList.insertAdjacentHTML("afterbegin", imageGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: "bottom", captionDelay: "250" });