// displayData
// display Datails

export class Ui {
    truncateText(text, wordLimit) {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    }
    displayGamesCategories(data) {
        let container = ``;
        data.forEach((item) => {
            container += `
                <div class="swiper-slide">
                    <div class="category-card p-2 position-relative">
                        <div class="card-inner p-2">
                            <div class="category-image mb-4">
                                <img src="${item.categoryThumbnail}" alt="${item.categoryName} Thumbnail" class="img-fluid w-100">
                            </div>
                            <h3 class="category-name h5">
                                ${item.categoryName}
                            </h3>
                            <span class="games-numbers fs-6">
                                ${item.gameNumbers} Available
                            </span>
                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById('categorySwiper').innerHTML = container;
        swiper.update();
        // change swiper initialSlide 
        swiper.initialSlide = Math.round(data.length / 2);
    }

    displayPopularGames(data) {
        let container = ``;
        for (let i = 0; i < 6; i++) {
            container += `
                    <div class="col-12 col-md-4">
                        <div class="curve-box game-card p-4 position-relative">
                            <div class="image mb-3">
                                <img src="${data[i].thumbnail}" alt="${data[i].title} image" class="img-fluid w-100">
                            </div>
                            <div class="content flex-grow-1">
                                <div class="d-flex justify-content-between">
                                    <h3 class="game-name">
                                        ${data[i].title}
                                    </h3>

                                </div>
                                <p class="text-secondary">${this.truncateText(data[i].short_description, 10)}</p>
                            </div>
                            <div class="footer d-flex justify-content-between">
                                <a href="#" class="btn main-btn show-datails-btn" gameId="${data[i].id}" data-bs-toggle="modal" data-bs-target="#detailsModal">show datails</a>
                                <span class="badge tag fw-bold">${data[i].platform}</span>
                            </div>

                        </div>
                    </div>
            `;
        }

        document.getElementById('popularGames').innerHTML = container;
    }
    displayFilterGames(data, category) {
        if (category) {
            document.getElementById('filterName').innerHTML = category;
        }
        let container = ``;
        data.forEach(item => {
            let itemCategory;
            if (category === 'All Games') {
                itemCategory = item.genre;
            } else {
                itemCategory = category;
            }
            container += `<div class="swiper-slide h-auto">
                            <div class="card game-card h-100 d-flex flex-column">
                                <img src="${item.thumbnail}" class="card-img-top" alt="${item.title} thumbnail">
                                <div class="card-body">
                                    <h5 class="card-title">${item.title}</h5>
                                    <p class="card-text">${this.truncateText(item.short_description, 10)}</p>
                                </div>
                                <div class="card-footer p-0">
                                    <div class="action px-3 py-2">
                                        <a href="#" class="btn main-btn mt-auto show-datails-btn" gameId="${item.id}" data-bs-toggle="modal" data-bs-target="#detailsModal">Show Details</a>
                                    </div>
                                    <div class="tags-container  d-flex justify-content-between px-3 py-2">
                                        <span class="badge tag game-category text-capitalize">${itemCategory}</span>
                                        <span class="badge tag game-platform text-capitalize">${item.platform}</span>
                                    </div>
                                </div>
                            </div>
                        </div>`;

        });
        document.getElementById('filter-swiper').innerHTML = container;

    }
    displayDetails(data) {
        let container = `<div class="row">
                    <div class="col-12 col-md-4">
                        <img src="${data.thumbnail}" alt="Game Image" class="img-fluid">
                    </div>
                    <div class="col-12 col-md-8">
                        <h3 class="game-tilte h1">${data.title}</h3>
                        <ul class="list-unstyled">
                            <li>
                                platform : <span class="badge bg-danger">${data.platform}</span>

                            </li>
                            <li>
                                Category : <span class="badge bg-danger">${data.genre}</span>
                            </li>
                            <li>
                                status : <span class="badge bg-danger">${data.status}</span>
                            </li>
                        </ul>
                        <p>${data.description}</p>
                        <div class="action">
                            <a target="_blank" href="${data.game_url}" class="btn main-btn mt-auto">Show Game</a>
                        </div>
                    </div>
                </div>`;

        document.getElementById('game-details-container').innerHTML = container;

    }
    displayLoader() {
        document.getElementById('loader').classList.remove('d-none');
        // document.body.classList.add('no-scroll');
    }
    hideLoader() {
        document.getElementById('loader').classList.add('d-none');
        // document.body.classList.remove('no-scroll');
    }
}
// Initialize Swiper after the DOM is updated
const swiper = new Swiper('.category-section .swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 2,
    centeredSlides: true,
    initialSlide: 3,
    freeMode: {
        enabled: true,
        sticky: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        }
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
});;