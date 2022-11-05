//Replace all whitespaces with %20
function cleanSearch(searchStr) {
    return searchStr.replace(/\s/g, '%20');
}

function searchDuckGo(searchStr) {
    let url = 'https://api.duckduckgo.com/?q=' + cleanSearch(search) + '&format=json&pretty=1&no_html=1&skip_disambig=1
    const axios = require("axios");
    try {
        const response = await axios.get(url);
        return {
            abstract: response.data.Abstract
        }
}