

// URL to obtain EU coutries with only the required fields
const countriesURL = 'https://restcountries.eu/rest/v2/regionalbloc/eu?fields=name;capital;population;area;flag;borders;'


function createNode(element) {
    return document.createElement(element);
}
function append(parent, ...el) {
    return parent.appendChild(...el);
}


function fetchCountries(apiURL) {
    const content = document.getElementById('content');
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            data.map(country => {
                let tr = createNode('tr'),
                    tdName = createNode('td'),
                    tdCap = createNode('td'),
                    tdPop = createNode('td'),
                    tdArea = createNode('td'),
                    tdDensity = createNode('td'),
                    tdBorders = createNode('td'),
                    tdFlag = createNode('td');

                tdName.innerHTML = country.name;
                tdCap.innerHTML = country.capital;
                tdPop.innerHTML = country.population;
                tdArea.innerHTML = country.area;
                tdDensity.innerHTML = country.area / country.population
                tdBorders.innerHTML = country.borders.length;

                append(tr, tdName);
                append(tr, tdCap);
                append(tr, tdPop);
                append(tr, tdArea);
                append(tr, tdDensity);
                append(tr, tdBorders);
                append(content, tr);


            })
        })
        .catch(error => console.log('error' + error))




}

document.addEventListener('DOMContentLoaded', e => {
    fetchCountries(countriesURL);

})

