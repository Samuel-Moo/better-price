// Esta función utiliza la librería 'amazon-buddy' para buscar productos en Amazon. Recibe un parámetro 'product' que representa el producto a buscar.
export default async function Amazon(product){
    const amazonScraper = require('amazon-buddy');

    try {
        // Se utiliza la función 'products' de la librería 'amazon-buddy' para buscar el producto.
        const products = await amazonScraper.products({ keyword: product});
    
        // Se imprime el precio del segundo resultado en la consola y se devuelve la lista completa de resultados.
        console.log(products.result[1].price)
        return(products.result)
           
    } catch (error) {
        // Si ocurre un error al buscar el producto, se imprime el error en la consola.
        console.log(error);
    }
}
