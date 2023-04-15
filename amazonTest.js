const amazonScraper = require('amazon-buddy');

(async () => {
    try {
        
    const products = await amazonScraper.products({ keyword: 'Nintendo Switch'});

       console.log(products.result[1].price)
    } catch (error) {
        console.log(error);
    }
})();