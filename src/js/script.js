// import debounse from "lodash.debounse";
import {fetchCountries} from "./fetchCountries";

console.log(fetchCountries('Ukraine'));

const input = document.querySelector(".input");
const div = document.querySelector(".js-box");


input.addEventListener("input", debounce(anSearchQuery, 2000))

function onSearchQuery (event){
    fetchCountries(event.target.value)
    .then((countries)=>{
        if (countries.length === 1) {
            const murkup = `
            <h1></h1>
            <p>Capital: ${countries.capital}</p>
            <p>Population: ${countries.population}</p>
            <p>Languages: ${countries.languages}</p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <img src="" alt="">`

            div.innerHTML = murkup
        } else if (countries.length > 2 && countries.length <= 10) {
            const listCountries = countries.map((country) => {
                return `<li>${country.name.common}</li>`
            })
            list.innerHTML = listCountries;
        } else {
            alert("Too many results")
        }
    })
}
