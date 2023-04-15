import Image from "next/image";
import Bubble from "./components/Bubble";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showCards, setShowCards] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState([]);
  const [mlresponse, setMlresponse] = useState([]);

  const handleSubmit = async () => {
    event.preventDefault();
    const result = await fetch("/api/amazonController", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: inputValue }),
    });

    const data = await result.json();
    setResponse(data.result);
    //console.log(data.result); // usamos el estado actualizado

    const resultMl = await fetch("/api/mlController", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: inputValue }),
    });

    const dataMl = await resultMl.json();
    setMlresponse(dataMl.result);

    setShowCards(true);
    return;
  };

  console.log(response);
  console.log(mlresponse);

  return (
    <>
      {/* Maquetacion inicial */}
      <div className="flex items-center justify-center ">
        {" "}
        {/* Div alinea al centro el contenido */}
        <div className="flex-col w-100">
          {" "}
          {/* Div alinea los elementos para que se coloquen encima de otros */}
          <h1 className="mt-10 ml-[38px] text-5xl">Better Price</h1>{" "}
          {/* Titulo y leyenda, Se les agrega un margen a  la izquierda {ml} para alinear */}
          <p className=" mt-2 ml-[85px]">The best price for all.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What do you want?"
              className="mt-10 w-80 input input-bordered  max-w-xs"
            />
            {/* Imput de tipo texto para las busquedas, Aun falta meterlo dentro de un form en el index */}
          </form>
        </div>
      </div>
      <br />
      <div className="flex justify-items-center">
        {showCards && (
          <>
            {response.map((amazon, i) => {
              return (
                <div className="flex mx-12">
                  <div className="container block-line flex">
                    <div className="card w-96 glass text-center text-neutral-content">
                      <figure>
                        <Image
                          src={amazon.thumbnail}
                          alt="image"
                          width={400}
                          height={400}
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{amazon.title}</h2>
                        <p>{amazon.price.current_price} USD</p>
                        <div className="card-actions justify-end">
                          <Link className="btn btn-primary" href={amazon.url}>
                            Buy on amazon
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {mlresponse.map((mercadolibre, i) => {
              return (
                <div className="flex mx-12">
                  <div className="container block-line flex">
                    <div className="card w-96 glass text-center text-neutral-content">
                      <figure>
                        <Image
                          src={mercadolibre.image}
                          alt="image"
                          width={400}
                          height={400}
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{mercadolibre.title}</h2>
                        <p>{mercadolibre.price} MXN</p>
                        <div className="card-actions justify-end">
                          <Link className="btn btn-primary" href={mercadolibre.url}>
                            Buy on Mercadolibre
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <Bubble />{" "}
      {/* Burbujas de animacion provienen de  './components/Bubble' */}
    </>
  );
}
