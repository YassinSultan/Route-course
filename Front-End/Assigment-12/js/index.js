const loader = document.getElementById('loader');
const ApiKey = '1656fd4d33494bf8be604956240512';
showLoader();
getLocation();

function showLoader() {
    loader.classList.remove('d-none');
}
function hideLoader() {
    loader.classList.add('d-none');
}
// get location coordinates
async function search(a) {
    try {
        showLoader();
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${a}&days=7`);
        const data = await response.json();
        updateUI(data);
    }
    catch (error) {
        console.error(error);
    } finally {
        hideLoader();
    }
}
document.getElementById("searchBtn").addEventListener('click', e => {
    e.preventDefault();
    const searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput) {
        search(searchInput);
    } else {
        getLocation();
    }
});
function getLocation() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            getForcastWeather(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.error("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.error("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    console.error("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.error("An unknown error occurred.");
                    break;
            }
        }
    );
}

async function getForcastWeather(latitude, longitude) {
    try {
        showLoader();
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${latitude},${longitude}&days=7`);
        const data = await response.json();
        updateUI(data);
    }
    catch (error) {
        console.error(error);
    }
}
function createDailyCard(data) {
    return `<div class="swiper-slide">
    <div class="glass-box p-5 rounded-top-3 h-100">
        <div class="d-flex flex-column align-items-center justify-content-center h-100 w-100">
            <div class="weather-icon text-center mb-3">
                <img src="https:${data.day.condition.icon}" alt="weather image" id="weatherImage">
            </div>
            <div class="box-content border-bottom w-100 text-center mb-4">
                <h2 class="weather-temperature mb-2 display-1 position-relative">${Math.round(data.day.avgtemp_c)}</h2>
                <p class="weather-info fs-4">${data.day.condition.text}</p>
            </div>
            <div class="date fs-4 mb-2">
                <h5 class="data h3 fw-light mb-3">${hundlesDate(data.date)}</h5>
            </div>
        </div>
    </div>
    </div>`;
}

function updateUI(data) {
    displayDailyWeather(data.forecast);
    displayCurrentWeather(data);
    swiper.update();
    hideLoader();
}
function displayDailyWeather(data) {
    const dailyCards = document.getElementById('dailyCards');
    dailyCards.innerHTML = '';
    data.forecastday.forEach(element => {
        dailyCards.innerHTML += createDailyCard(element);
    });;
}
function hundlesDate(data) {
    data = data.split(' ')[0];
    let date = new Date(data);
    const today = new Date();
    const todayString = today.toISOString().split("T")[0];
    if (data === todayString) {
        return "Today";
    }
    const dayName = date.toLocaleString("en-US", { weekday: "long" });
    return dayName;

}
function displayCurrentWeather(data) {
    let countryName = document.querySelectorAll('.country-name');
    let weatherImage = document.getElementById('weatherImage');
    let currentDate = document.getElementById('date');
    let currentTemperature = document.getElementById('Temperature');
    let weatherText = document.getElementById('weatherText');
    let windSpeed = document.getElementById('windSpeed');
    let humTemperature = document.getElementById('humTemperature');

    countryName.forEach((text) => {
        text.textContent = data.location.name;
    });
    weatherImage.src = `https:${data.current.condition.icon}`;
    currentDate.textContent = hundlesDate(data.location.localtime);
    currentTemperature.textContent = `${Math.round(Math.round(data.current.temp_c))}`;
    weatherText.textContent = data.current.condition.text;
    windSpeed.textContent = `${data.current.wind_kph} km/h`;
    humTemperature.textContent = `${data.current.humidity}%`;
};

// =========== Swiper Initialize ==============
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }

});

