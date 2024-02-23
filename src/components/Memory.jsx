import { useEffect, useState } from "react"
import Items from "./Items";
// import { s } from "vite/dist/node/types.d-jgA8ss1A";

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

  const [disableButton, setDisableButton] = useState('');
  const [anterior1, setAnterior1] = useState({ index: '' });
  const [anterior2, setAnterior2] = useState({ index: '' });
  const [parejaEncontrada, setParejaEncontrada] = useState(false);


  useEffect(() => {
    if ((anterior1.index !== '') && (anterior2.index !== '')) {
      setLogos(logos => logos.map(logo => {
        if (logos[anterior1.index].img === logos[anterior2.index].img) {
          return { ...logo };
        } else if (logo.index === anterior1.index || logo.index === anterior2.index) {
          return { img: logo.img, isVisible: false, index: logo.index }
        } else {
          return logo;
        }
      }));
      setAnterior1({ index: '' });
      setAnterior2({ index: '' });
    }
  }, [anterior2.index])


  function setCardVisible(index) {
    //Hacer que no se pueda clickar si esta en true
    //Logica para que solo se puedan marcar dos cards
    if ((anterior1.index === '') || (anterior2.index === '')) {
      if (anterior1.index === '') {
        setAnterior1({ index: index });
      } else {
        setAnterior2({ index: index });
      }
    }

    let logos_array = logos;
    logos_array.map(logo => {
      if (logo.index === index) {
        if (!logo.isVisible) {
          setLogos(logos => logos.map(logo => {
            if (logo.index === index) {
              return { ...logo, isVisible: true }
            }
            return { ...logo }
          }));
        }
      }
    })
  }




  return (
    <>
      <p className="text-center text-6xl">{anterior1.index}</p>
      <p className="text-center text-6xl">{anterior2.index}</p>
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-4">
          <Items logos={logos} setCardVisible={setCardVisible} disableButton={disableButton} />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="border-2 border-sky-500 px-3 py-1 rounded-lg hover:bg-sky-500">Shuffle</button>
      </div>
    </>


  )
}

export default Memory
