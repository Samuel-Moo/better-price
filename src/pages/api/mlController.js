// Este es un controlador de ruta para manejar solicitudes HTTP POST en Next.js
export default async (req, res) => {
  // Verifica si la solicitud es una solicitud POST
  if (req.method === "POST") {
    // Extrae el valor de "input" del cuerpo de la solicitud
    const { input } = req.body;
    // Llama a la función "Meli" con el valor de entrada y espera la respuesta
    const responses = await Meli(input);
    // Envía la respuesta como un objeto JSON en la respuesta HTTP
    res.json({ result: responses }); // la clave en el objeto enviado debe ser "result"
  } else {
    // Si la solicitud no es una solicitud POST, devuelve un error 404
    res.status(404).send("Not found");
  }
};

// Esta es la función "Meli" que se llama en el controlador de ruta anterior
async function Meli(product) {
  // Importa la biblioteca "mercadolibre"
  var meli = require("mercadolibre");
  // Crea un objeto "meliObject" utilizando las credenciales de la API de MercadoLibre
  var meliObject = new meli.Meli(process.env.MLID, process.env.MLSECRET);

  // Devuelve una nueva promesa que hace una solicitud a la API de MercadoLibre
  return new Promise((resolve, reject) => {
    // Hace una solicitud GET a la API de MercadoLibre para buscar productos que coincidan con el valor de entrada
    meliObject.get(`sites/MLM/search?q=${product}`, function (err, res) {
      if (err) {
        // Si hay un error en la solicitud, rechaza la promesa con el error
        console.log(err);
        reject(err);
      } else {
        // Si la solicitud tiene éxito, extrae la información del primer producto en la respuesta
        const response = {
          id: res.results[0].id,
          title: res.results[0].title,
          price: res.results[0].price,
          image: res.results[0].thumbnail,
          url: res.results[0].permalink,
        };
        // Imprime la información del producto en la consola
        console.log(response);
        // Resuelve la promesa con un arreglo que contiene la información del producto
        resolve([response]);
      }
    });
  });
}
