
let inputEle = document.getElementById("location-input")
let tempEle = document.getElementById("temp-value")
let locEle = document.getElementById("location")
let weatherdescEle = document.getElementById('weather-desc')
let btnEle = document.getElementById("btn")
let icon = document.getElementById("icon")

const apiKey = 'a6650b6eedcdfeed66ac774cefac5c57';

btnEle.onclick = function(){
    if(inputEle.value == "")
        alert("Please enter some location")
    else{
        loc = inputEle.value 
        url = 'https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}'
        fetch(url).then(res => res.json())
        .then(data => {
            console.log(data)
            const{name} = data
            const{feels_like} = data.main 
            const{description} = data.weather[0]
            tempEle.innerText = Math.floor(feels_like-273);
            locEle.innerText = name;
            weatherdescEle.innerText = description
        })
        .catch(()=>{
            alert("Enter valid location")
        })
        inputEle.value = ""
    }
}