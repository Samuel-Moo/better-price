export default async (req, res) => {
    if (req.method === "POST") {
      const { input } = req.body;
      const responses = await Amazon(input);
      res.json({ result: responses }); // la clave en el objeto enviado debe ser "result"
    } else {
      res.status(404).send("Not found");
    }
  };
  
  async function Amazon(product) {
    const amazonScraper = require("amazon-buddy");
  
    try {
      const products = await amazonScraper.products({ keyword: product });
      console.log(products.result[1].price.current_price);
      return [products.result[3]]; // devolvemos un array en lugar de un objeto
    } catch (error) {
      console.log(error);
    }
  }
  
