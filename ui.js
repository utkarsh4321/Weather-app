class UI{
showdata(data){

const h4 = document.querySelector('.condition'),
 temp = document.querySelector('#temp'),
 logo = document.querySelector('#logo');
// li1 = document.querySelector('.humidity'),
// li2 = document.querySelector('.dewpoint'),
// li3 = document.querySelector('.feel'),
// li4 = document.querySelector('.wind');
let out = '';
h4.innerHTML = `${data.current.condition.text}`
temp.innerHTML = `${data.current.temp_f} F (${data.current.temp_c} &#8451;)`;
logo.setAttribute('src',`${data.current.condition.icon}`);

// li1.innerHTML = `Relative Humidity: ${data.current.humidity}`
// li2.innerHTML = `Feelslike: ${data.current.feelslike_c}`
// li3.innerHTML = `Cloud: ${data.current.cloud}`
// li4.innerHTML = `Wind: ${data.current.wind_mph}`

out += `<li>Region: ${data.location.region}</li>

<li>Country: ${data.location.country}</li>
<li>Local Time: ${data.location.localtime}</li>
<li class="humidity">Relative Humidity: ${data.current.humidity}</li>
<li class="dewpoint">Feelslike: ${data.current.feelslike_c}</li>
<li class="feel">Cloud: ${data.current.cloud}</li>
<li class="wind">Wind: ${data.current.wind_mph}</li>


`
document.querySelector('#info').innerHTML = out;



// let out = '';

// out += `

// <h4 class="condition">${data.forecast.forecastday[0].day.condition.text}</h4>
// <div id="temp">${data.current.temp_f} F <span id="celcius">(${data.current.temp_c} &#8451;)</span></div>




}



}


