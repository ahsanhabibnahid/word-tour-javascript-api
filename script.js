fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => {
    displayData(data)
})

const displayData = countries => {
    const countriesDiv = document.getElementById('countries')
    
    countries.forEach(country =>{
              const countryDiv = document.createElement('div')
        countryDiv.className = 'country'

        const countryInfo = `
            <h3 class='country-name'>${country.name}</h3>
            <p>${country.capital}</p>
            <button id='mybutton' onclick="displayCountryDetails('${country.name}'); topFunction()">Details</button>
        `
        
        countryDiv.innerHTML = countryInfo
        countriesDiv.appendChild(countryDiv)
    })
}

const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}` 
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const renderCountry = data[0];
        renderCountryInfo(renderCountry)
    })
}

const renderCountryInfo = country => {
    const countryDiv = document.getElementById('countryDetails')
    countryDiv.innerHTML = `
        <h1>Name: ${country.name}</h1>
        <p> Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <p>Timezones: ${country.timezones}</p>
        <img style='width:300px' src='${country.flag}' />
    `
}


let mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}