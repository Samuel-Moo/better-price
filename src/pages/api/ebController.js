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
  

 // Esta es una función asíncrona llamada Ebay que recibe un parámetro llamado product.
async function Ebay(product) {
    // Se importa el módulo ebay-scraper-wintr.
    const ebayApi = require('ebay-scraper-wintr')
    // Se crea una instancia del objeto ebayApi utilizando una clave de API.
    const search = new ebayApi('643cb85e09003c04999643e38f3a41bc2519')
  
    // Se utiliza la instancia del objeto search para realizar una búsqueda de productos en eBay con la cadena de búsqueda especificada como parámetro.
    return search.getProducts(`https://www.ebay.com/sch/i.html?_nkw=${product}`) // Example: https://www.ebay.com/sch/i.html?_nkw=phone
      // Si la búsqueda es exitosa, el método then devuelve el segundo elemento del arreglo data (que contiene la información del producto) y lo imprime en la consola.
      .then((data) => {
        console.log(data[1])
        // Luego, se devuelve un arreglo que contiene el segundo elemento de data.
        return [data[1]]
      })
      // Si la búsqueda falla, el método catch registra el error en la consola.
      .catch((err) => {
        console.error(err)
      })
  }
  
  