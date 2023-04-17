// Este es un controlador de ruta para manejar solicitudes HTTP POST en Next.js
export default async (req, res) => {
    // Verifica si la solicitud es una solicitud POST
    if (req.method === "POST") {
      // Extrae el valor de "input" del cuerpo de la solicitud
      const { input } = req.body;
      // Llama a la función "Meli" con el valor de entrada y espera la respuesta
      const responses = await Ebay(input);
      // Envía la respuesta como un objeto JSON en la respuesta HTTP
      res.json({ result: responses }); // la clave en el objeto enviado debe ser "result"
    } else {
      // Si la solicitud no es una solicitud POST, devuelve un error 404
      res.status(404).send("Not found");
    }
  };
  

  async function Ebay(product) {
    const ebayApi = require('ebay-scraper-wintr')
    const search = new ebayApi('643cb85e09003c04999643e38f3a41bc2519')
  
    return search.getProducts(`https://www.ebay.com/sch/i.html?_nkw=${product}`) // Example: https://www.ebay.com/sch/i.html?_nkw=phone
      .then((data) => {
        console.log(data[1])
        return [data[1]]
      })
      .catch((err) => {
        console.error(err)
      })
  }
  