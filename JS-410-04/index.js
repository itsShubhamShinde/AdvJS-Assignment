console.log("hello");
var input = document.getElementById("input")
var result = document.getElementById("answerDiv")

async function func(params) {
    result.innerHTML = ""
    const value = input.value
    
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
    
    console.log(res);
    const data = await res.json()
    result.style.backgroundColor = "white"
    
    result.innerHTML = `
    <div class="wedDiv">
                <h3>Weather of ${value} </h3>
            </div>
            <div class="ansDiv">
                <p>Sky Condition : <a>${data.weather[0].description}</a>  </p>
                <p>Temperature : <a>${data.main.temp} C</a></p>
                <p>Wind Speed : <a>${data.wind.speed} km/h</a></p>
            </div>
    `




}