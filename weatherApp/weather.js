const API_KEY = `b64643bfd7284dae866181635240303`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
const tem = document.querySelector("#weather");


const getdata = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=b64643bfd7284dae866181635240303&q=${city}`;

    let response = await fetch(url);
    const data = await response.json();
    console.log(data.current.humidity);
    console.log(data);
    return showWeather(data);
}

const showWeather = (data) => {
    try {
        if (data.error.code == "1006")
            tem.innerHTML = `<h2>${data.error.message}</h2>`;

    }
    catch {

        tem.innerHTML = `<div id="icon">
    <img src="${data.current.condition.icon}" alt="image">
    <div id="humidit">
        <h3>${data.current.humidity}</h3>
    </div>
    </div>
    <div id="msg">
    <div >
    <h3>${data.current.temp_c}<b>°C</b></h3>
    </div>
    <div>
    <p>${data.current.condition.text}</p>
    </div>
    </div>`
    }

};
form.addEventListener("submit", (event) => {
    event.preventDefault();
    getdata(search.value);
    tem.innerHTML = `<h3>Data loading...</h3>`;

})