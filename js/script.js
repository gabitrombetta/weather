const key = 'c941840cd1b3f4345b66570a529f2d7d'

function putData(data){
    console.log(data)
    document.querySelector(".cidade").innerHTML = "Tempo em " + data.name
    document.querySelector(".temperatura").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".ceu").innerHTML = data.weather[0].description
    document.querySelector(".umidade").innerHTML = data.main.humidity + "%"
    document.querySelector(".vento").innerHTML = data.wind.speed.toFixed(1) + "km/h"
    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    
    putData(data)
}

function clickOnButton() {
    const city = document.querySelector('.input-cidade').value

    searchCity(city)
}