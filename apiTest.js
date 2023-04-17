const Ebay = require('ebay-scraper-wintr')
const scraper = new Ebay('643cb85e09003c04999643e38f3a41bc2519')
 
scraper.getProducts('https://www.ebay.com/sch/i.html?_nkw=phone') // Example: https://www.ebay.com/sch/i.html?_nkw=phone
.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.error(err)
})