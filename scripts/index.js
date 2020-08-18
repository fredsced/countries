
// URL to obtain EU countries with only the required fields
const countriesURL = 'https://restcountries.eu/rest/v2/regionalbloc/eu?fields=name;capital;population;area;flag;borders;'

const mapURL = 'https://www.google.com/maps/embed/v1/place';
const APIKEY = 'AIzaSyCnYhHe2_GKIyz_2gjHG__qxEecQ7VyLvs';
const map = document.getElementById('map');

function createNode(element) {
    return document.createElement(element);
}

function fetchCountries(apiURL) {
    const content = document.getElementById('content');
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            data.map(country => {
                const tr = createNode('tr'),
                    tdName = createNode('td'),
                    tdCap = createNode('td'),
                    tdPop = createNode('td'),
                    tdArea = createNode('td'),
                    tdDensity = createNode('td'),
                    tdBorders = createNode('td'),
                    tdFlag = createNode('td'),
                    flagImg = createNode('img');

                tdName.innerHTML = country.name;
                tdCap.innerHTML = country.capital;
                tdPop.innerHTML = new Intl.NumberFormat('en-US').format(country.population);
                tdArea.innerHTML = country.area ? new Intl.NumberFormat('en-US').format(country.area) : 'N/A';
                tdDensity.innerHTML = country.area ? new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 }).format(country.population / country.area) : 'N/A';
                tdBorders.innerHTML = country.borders.length;
                flagImg.src = country.flag;
                
                flagImg.addEventListener('click', e => {
                    const makeUrl = `${mapURL}?key=${APIKEY}&q=${country.name} ${country.capital}`;
                    map.src = makeUrl;
                })
                              
                tdFlag.append(flagImg);

                tr.append(tdName, tdCap, tdPop, tdArea, tdDensity, tdBorders, tdFlag);
                content.append(tr);

            })
        })
        .catch(error => alert('error : ' + error))

}

document.addEventListener('DOMContentLoaded', e => {
    fetchCountries(countriesURL);

})