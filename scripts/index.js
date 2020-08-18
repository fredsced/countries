import { COUNTRIES_URL } from './env.js';
import populateTable from './populateTable.js';
import toFetch from './toFetch.js';

document.addEventListener('DOMContentLoaded', e => {
    toFetch(COUNTRIES_URL, populateTable);
})


