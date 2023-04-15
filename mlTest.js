var meli = require('mercadolibre');
var meliObject = new meli.Meli(process.env.MLID, process.env.MLSECRET);
var searchString = 'iphone x'
var response = [];
//Get items from mercado libre argentina
meliObject.get(`sites/MLM/search?q=${searchString}`, function (err, res) {
    if (err) {
      console.log(err);
      return;
    }
  
    for (let i = 0; i < res.results.length; i++) {
      response.push(res.results[i]);
    }
  
    //console.log(response[0].id + response[0].title + response[0].price );
    console.log(response[0]);
  });


  /* function Meli(product){

    var meli = require('mercadolibre');
    var meliObject = new meli.Meli(process.env.MLID, process.env.MLSECRET);
    var response = [];

    meliObject.get(`sites/MLM/search?q=${product}`, function (err, res) {
        if (err) {
          console.log(err);
          return;
        }
      
        for (let i = 0; i < res.results.length; i++) {
          response.push(res.results[i]);
        }
      
        //console.log(response[0].id + response[0].title + response[0].price );
        console.log(response[0]);
        return response[0]
      });
    
} */