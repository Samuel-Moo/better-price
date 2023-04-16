const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://ebay-data-scraper.p.rapidapi.com/products',
  params: {page_number: '1', product_name: 'paper ink'},
  headers: {
    'X-RapidAPI-Key': '183172dcb7mshc5480fa98b30d9ap1dee26jsnc981973d94f7',
    'X-RapidAPI-Host': 'ebay-data-scraper.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});