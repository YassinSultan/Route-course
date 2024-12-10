const ApiKey = '1656fd4d33494bf8be604956240512';
const elements = {
    loader: document.getElementById('loader'),
    errorElement: document.getElementById('errorElement'),
    dailyCards: document.getElementById('dailyCards'),
    countryName: document.querySelectorAll('.country-name'),
    weatherImage: document.getElementById('weatherImage'),
    currentDate: document.getElementById('date'),
    currentTemperature: document.getElementById('Temperature'),
    weatherText: document.getElementById('weatherText'),
    windSpeed: document.getElementById('windSpeed'),
    humTemperature: document.getElementById('humTemperature'),
};
function showError(message) {
    elements.errorElement.textContent = message;
    elements.errorElement.classList.remove('d-none');
    setTimeout(() => {
        elements.errorElement.classList.add('d-none');
    }, 5000);
}
navigator.geolocation.getCurrentPosition(
    position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getForcastWeather(lat, lon);
    },
    error => {
        let message = "Unable to retrieve your location!";
        switch (error.code) {
            case error.PERMISSION_DENIED:
                message = "Location access denied by user. Please allow location access or enter it manually.";
                break;
            case error.POSITION_UNAVAILABLE:
                message = "Location information is unavailable. Try again later.";
                break;
            case error.TIMEOUT:
                message = "Location request timed out. Please try again.";
                break;
        }
        console.error(message);
        showError(message);
        getForcastWeather(51.507351, -0.127758);
        hideLoader();
    }
);
function showLoader() {
    elements.loader.classList.remove('d-none');
}
function hideLoader() {
    elements.loader.classList.add('d-none');
}
function getLocation() {
    try {
        if (!navigator.geolocation) {
            throw new Error('Geolocation is not supported by your browser');
        }
        showLoader();
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getForcastWeather(lat, lon);
        }, error => {
            console.error(error);
            showError(`Unable to retrieve your location! ... Plese Add your location manually`);
            hideLoader();
        });
    } catch {
        console.error('Unable to retrieve your location.');
    }
}
async function fetchData(url) {
    try {
        showLoader();
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        showError("An error occurred while fetching the weather data. Please try again.");
        return null;
    }
    finally {
        hideLoader();
    }
}
async function getForcastWeather(latitude, longitude) {
    try {
        const data = await fetchData(`https://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${latitude},${longitude}&days=7`);
        updateUI(data);
    }
    catch (error) {
        console.error(error);
    }
}
async function search(a) {
    try {
        const data = await fetchData(`https://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${a}&days=7`);
        if (!data || data.error) {
            showError("City not found. Please enter a valid city name.");
            return;
        }
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
}
function displayDailyWeather(data) {
    elements.dailyCards.innerHTML = '';
    data.forecastday.forEach(element => {
        elements.dailyCards.innerHTML += createDailyCard(element);
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
    elements.countryName.forEach((text) => {
        text.textContent = data.location.name;
    });
    elements.weatherImage.src = `https:${data.current.condition.icon}`;
    elements.currentDate.textContent = hundlesDate(data.location.localtime);
    elements.currentTemperature.textContent = `${Math.round(Math.round(data.current.temp_c))}`;
    elements.weatherText.textContent = data.current.condition.text;
    elements.windSpeed.textContent = `${data.current.wind_kph} km/h`;
    elements.humTemperature.textContent = `${data.current.humidity}%`;
};
// initialize Application
getLocation();

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

