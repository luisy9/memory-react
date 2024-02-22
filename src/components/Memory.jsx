import { useState } from "react"
import Items from "./Items";

export const Memory = () => {

  const [logos, setLogos] = useState([
    { img: 'cocacola.webp', isVisible: false, index: 0 },
    { img: 'davidgoggins.webp', isVisible: false, index: 1 },
    { img: 'milka.svg', isVisible: false, index: 2 },
    { img: 'nestea.webp', isVisible: false, index: 3 },
    { img: 'cocacola.webp', isVisible: false, index: 4 },
    { img: 'davidgoggins.webp', isVisible: false, index: 5 },
    { img: 'nestea.webp', isVisible: false, index: 6 },
    { img: 'elonmusk.webp', isVisible: false, index: 7 },
    { img: 'elonmusk.webp', isVisible: false, index: 8 },
    { img: 'oppenhaimmer.webp', isVisible: false, index: 9 },
    { img: 'milka.svg', isVisible: false, index: 10 },
    { img: 'oppenhaimmer.webp', isVisible: false, index: 11 },
  ]);

  const [anterior1, setAnterior1] = useState({ index: '' });
  const [anterior2, setAnterior2] = useState({ index: '' });


  function setCardVisible(index, isVisible) {
    setLogos(logos.map(logo => {
      if (logo.index === index) {
        return { img: logo.img, isVisible: !logo.isVisible, index: logo.index }
      } else {
        return logo
      }
    }));

    //Setear Imagenes para la comparación
    let imagen1;
    let imagen2;

    if (anterior1.index === '') {
      imagen1 = { index: index };
      setAnterior1({ index: index });
    } else if (anterior1.index !== '') {
      imagen2 = { index: index }
      setAnterior2({ index: index });
    }

    if (imagen1 && imagen2) {
      compareImagenes();
    }
  }

  function compareImagenes() {
    const logos = [
      { img: 'cocacola.webp', isVisible: false, index: 0 },
      { img: 'davidgoggins.webp', isVisible: false, index: 1 },
      { img: 'milka.svg', isVisible: false, index: 2 },
      { img: 'nestea.webp', isVisible: false, index: 3 },
      { img: 'cocacola.webp', isVisible: false, index: 4 },
      { img: 'davidgoggins.webp', isVisible: false, index: 5 },
      { img: 'nestea.webp', isVisible: false, index: 6 },
      { img: 'elonmusk.webp', isVisible: false, index: 7 },
      { img: 'elonmusk.webp', isVisible: false, index: 8 },
      { img: 'oppenhaimmer.webp', isVisible: false, index: 9 },
      { img: 'milka.svg', isVisible: false, index: 10 },
      { img: 'oppenhaimmer.webp', isVisible: false, index: 11 },
    ];

    /* Ahora lo que tenemos que hacer es lo siguiente: tenemos que poner en Visible si coinciden el valorAnterior1 y el valorAnterior2 
    (si tienen el mismo nombre de imagen), 
    si no coinciden pues que haya un setTimeout y que las dos imagenes vuelvan a estar en isVisible: false  */

  }


  function shuffle() {

  }


  return (
    <>
      <p className="text-center text-6xl">{anterior1.index}</p>
      <p className="text-center text-6xl">{anterior2.index}</p>
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-4">
          <Items logos={logos} setCardVisible={setCardVisible} />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="border-2 border-sky-500 px-3 py-1 rounded-lg hover:bg-sky-500"
          onClick={() => shuffle()}>Shuffle</button>
      </div>
    </>


  )
}

export default Memory
