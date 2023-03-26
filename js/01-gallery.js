import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function imageGalleryMarkup(items) {
    return items
        .map((item) => `<li class="gallery__item">
                        <a class="gallery__link" href="${item.original}">
                            <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
                        </a>
                    </li>`
        )
        .join(" ");
};

galleryList.insertAdjacentHTML("afterbegin", imageGalleryMarkup(galleryItems));

galleryList.addEventListener('click', onImageClick);

function onImageClick(e) {
    blockStandartAction(e);
    
    if (e.target.nodeName !== 'IMG') {
        return;
    };

    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="600" height="600">`);
    instance.show();

    galleryList.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            instance.close();
        }
    });
};

function blockStandartAction(e) {
        e.preventDefault();
    }
