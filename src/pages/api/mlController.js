export default async (req, res) => {
  if (req.method === "POST") {
    const { input } = req.body;
    const responses = await Meli(input);
    res.json({ result: responses }); // la clave en el objeto enviado debe ser "result"
  } else {
    res.status(404).send("Not found");
  }
};

async function Meli(product) {
  var meli = require("mercadolibre");
  var meliObject = new meli.Meli(process.env.MLID, process.env.MLSECRET);

  return new Promise((resolve, reject) => {
    meliObject.get(`sites/MLM/search?q=${product}`, function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        const response = {
          id: res.results[0].id,
          title: res.results[0].title,
          price: res.results[0].price,
          image: res.results[0].thumbnail,
          url: res.results[0].permalink,
        };
        console.log(response);
        resolve([response]);
      }
    });
  });
}
