import { APIKEY, MAP_URL } from './env.js';

const map = document.getElementById('map');
const content = document.getElementById('content');
const formatNumberIntl = new Intl.NumberFormat('en-US');
const formatNumberIntl3Decimals = new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 })

// Helper to create nodes
function createNode(element) {
    return document.createElement(element);
}
export default function populateTable(datas) {
    datas.map(country => populateRow(country))
}

function populateRow(country) {
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
    tdPop.innerHTML = formatNumberIntl.format(country.population);
    tdArea.innerHTML = country.area ? formatNumberIntl.format(country.area) : 'N/A';
    tdDensity.innerHTML = country.area ? formatNumberIntl3Decimals.format(country.population / country.area) : 'N/A';
    tdBorders.innerHTML = country.borders.length;
    flagImg.src = country.flag;

    flagImg.addEventListener('click', e => {
        const makeUrl = `${MAP_URL}?key=${APIKEY}&q=${country.name} ${country.capital}`;
        map.src = makeUrl;
    });

    tdFlag.append(flagImg);

    tr.append(tdName, tdCap, tdPop, tdArea, tdDensity, tdBorders, tdFlag);
    content.append(tr);
}