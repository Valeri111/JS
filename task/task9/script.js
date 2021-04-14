class Country{
    constructor(name, capital, population, language){
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.language = language;
    }

}
let country;

const createNewEmployer = document.getElementById('create_country');
const toJSon = document.getElementById('toJSon');
const onlyString = document.getElementById('onlyString');
const inJson = document.getElementById('inJson');
const info = document.getElementById('info');

createNewEmployer.addEventListener("click",(event) =>
{
    event.preventDefault();
    country = createCountry();
});

toJSon.addEventListener("click", (event) =>
{
    event.preventDefault();
    serializedEmpString = serializeEmp();
});
inJson.addEventListener("click", (event) =>
{
    event.preventDefault();
    country = deserializeEmp();
});
onlyString.addEventListener("click", (event) =>
{
    event.preventDefault();
    country = deserializeEmpStringProps();
});
var serializedEmpString = serializeEmp();
function createCountry()
{
    let name = prompt("Введите название страны:");
    let capital = prompt("Введите столицу:");
    let population = Number (prompt("Введите население:"));
    let language = prompt("Национальный язык:");
    return new Country(name, capital, population, language);
}
function serializeEmp()
{
    let jsonString = JSON.stringify(country, null, ' ');
    info.innerHTML = jsonString;
    return jsonString;
}
function deserializeEmpStringProps()
{
    let countryObject = JSON.parse(serializedEmpString, function(k, v)
    {
        if (typeof v === 'number')
        {
            return "";
        }
        return v;
    }, ' ');
    info.innerHTML = countryObject["name"];
    info.innerHTML += countryObject["population"];
    info.innerHTML += countryObject["capital"];
    info.innerHTML += countryObject["language"];
    return countryObject;
}
function deserializeEmp()
{
    let countryObject = JSON.parse(serializedEmpString, null);
    info.innerHTML = countryObject["name"];
    info.innerHTML += countryObject["population"];
    info.innerHTML += countryObject["capital"];
    info.innerHTML += countryObject["language"];
    return countryObject;
}
function createJsonManually()
{
    let count = '{ "name": "Беларусь", "population": 350000, "capital": "Минск" , "language": "русский"}';
}