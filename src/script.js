const form = document.querySelector('form');
let formLocation = document.querySelector('.location');
let formCountry = document.querySelector('.country_span');
let formTemperature = document.querySelector('.degree_measurement');
let formIcon = document.querySelector('.weather_icon');
let formDescription = document.querySelector('.description')

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    let formInput = document.querySelector('.form_input').value;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${formInput}&appid=799efd85896630e10d0aa09b6012e3e7&units=metric`;
    try {
        const res = await axios.get(api);

        let description = res.data.weather[0].description;
        let icon = res.data.weather[0].icon;
        let iconImg = `https://openweathermap.org/img/wn/${icon}@4x.png`;
        let temperature = res.data.main.temp;
        const country = res.data.sys.country;
        formLocation.textContent = `${formInput},`;
        formCountry.textContent = country;
        formDescription.textContent = description;
        formIcon.src = iconImg;
        formTemperature.textContent = temperature;
        formInput = " ";
        document.querySelector('.form_input').value = "";
    } catch(e){
        formDescription.textContent = "Please enter a valid location";
        formCountry.textContent = " ";
        formLocation.textContent = " ";
        formIcon.src = " ";
        formTemperature.textContent = "--";
        document.querySelector('.form_input').value = ""
    }
});