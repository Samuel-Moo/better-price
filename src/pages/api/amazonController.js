// Este es un controlador de ruta para manejar solicitudes HTTP POST en Next.js
export default async (req, res) => {
  // Verifica si la solicitud es una solicitud POST
  if (req.method === "POST") {
    // Extrae el valor de "input" del cuerpo de la solicitud
    const { input } = req.body;
    // Llama a la función "Amazon" con el valor de entrada y espera la respuesta
    const responses = await Amazon(input);
    // Envía la respuesta como un objeto JSON en la respuesta HTTP
    res.json({ result: responses }); // la clave en el objeto enviado debe ser "result"
  } else {
    // Si la solicitud no es una solicitud POST, devuelve un error 404
    res.status(404).send("Not found");
  }
};

// Esta es la función "Amazon" que se llama en el controlador de ruta anterior
async function Amazon(product) {
  // Importa la biblioteca "amazon-buddy"
  const amazonScraper = require("amazon-buddy");
  
  try {
    // Realiza una búsqueda de productos en Amazon utilizando el valor de entrada
    const products = await amazonScraper.products({ keyword: product });
    // Imprime el precio del segundo producto en la respuesta
    console.log(products.result[1].price.current_price);
    // Devuelve un arreglo que contiene la información del cuarto producto en la respuesta
    return [products.result[3]]; // devolvemos un array en lugar de un objeto
  } catch (error) {
    // Si hay un error en la búsqueda, imprime el error en la consola
    console.log(error);
  }
}
