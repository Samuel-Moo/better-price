import Bubble from './components/Bubble'
import Search from './components/Search'

export default function Home() {
  return (
    <>
    {/* Maquetacion inicial */}
    <div className="flex items-center justify-center "> {/* Div alinea al centro el contenido */}
      <div class="flex-col w-100"> {/* Div alinea los elementos para que se coloquen encima de otros */}

        <h1 className='mt-10 ml-[51px] text-warning text-5xl'>Best Price</h1> {/* Titulo y leyenda, Se les agrega un margen a  la izquierda {ml} para alinear */}
        <p className=' mt-2 ml-[85px] text-warning'>The best price for all.</p>

        <Search/> {/* Barra de busqueda, proviene de ./components/Search */}

      </div>
    </div>

    
    <Bubble/> {/* Burbujas de animacion provienen de  './components/Bubble' */}
  </>        
  )
}
