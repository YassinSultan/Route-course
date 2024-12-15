import { Games } from './game.js';
new Games();


// ============ navbar colro ============
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add class when scrolled
    } else {
        navbar.classList.remove('scrolled'); // Remove class when at the top
    };
});

// Initialize Swiper after the DOM is updated
const filterSwiper = new Swiper('#filterSwiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4, // عدد الشرائح الافتراضي
    slidesPerGroup: 4,
    grid: {
        rows: 3,
        fill: 'row',
    },
    spaceBetween: 10,
    breakpoints: { // إعدادات الـ Responsive
        320: { // للشاشات الصغيرة مثل الموبايل
            slidesPerView: 1,
            slidesPerGroup: 1,
            grid: {
                rows: 2,
            },
        },
        768: { // للشاشات المتوسطة مثل التابلت
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
                rows: 2,
            },
        },
        1024: { // للشاشات الكبيرة مثل الديسكتوب
            slidesPerView: 4,
            slidesPerGroup: 4,
            grid: {
                rows: 3,
            },
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            const maxVisibleNumbers = 2;
            let start = Math.max(current - 1, 1);
            let end = Math.min(start + maxVisibleNumbers - 1, total);

            if (end - start + 1 < maxVisibleNumbers) {
                start = Math.max(end - maxVisibleNumbers + 1, 1);
            }

            let paginationHTML = `
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-center">
                        <li class="page-item ${current === 1 ? 'disabled' : ''}" >
                            <button class="page-link prev-link">&laquo;</button>
                        </li>`;

            for (let i = start; i <= end; i++) {
                paginationHTML += `
                    <li class="page-item ${current === i ? 'active' : ''}">
                        <button class="page-link page-link-number" data-page="${i}">${i}</button>
                    </li>`;
            }

            if (end < total - 1) {
                paginationHTML += `
                    <li class="page-item">
                        <span class="page-link text-white">...</span>
                    </li>`;
            }

            if (end < total) {
                paginationHTML += `
                    <li class="page-item ${current === total ? 'active' : ''}">
                        <button class="page-link page-link-number" data-page="${total}">${total}</button>
                    </li>`;
            }

            paginationHTML += `
                        <li class="page-item ${current === total ? 'disabled' : ''}">
                            <button class="page-link next-link">&raquo;</button>
                        </li>
                    </ul>
                </nav>`;

            return paginationHTML;
        },
    },
});



// Add event listeners for custom pagination links
document.getElementById('filterPagination').addEventListener('click', function (e) {
    if (e.target.classList.contains('prev-link')) {
        e.preventDefault();
        filterSwiper.slidePrev(); // Navigate to the previous page
    } else if (e.target.classList.contains('next-link')) {
        e.preventDefault();
        filterSwiper.slideNext(); // Navigate to the next page
    } else if (e.target.classList.contains('page-link-number')) {
        e.preventDefault();
        const page = parseInt(e.target.dataset.page, 10);
        filterSwiper.slideTo((page - 1) * filterSwiper.params.slidesPerGroup); // Navigate to the specific page
    }
});



