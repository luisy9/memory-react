import { useEffect, useState } from "react"
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

  const [disableButton, setDisableButton] = useState('');
  const [anterior1, setAnterior1] = useState({ index: '' });
  const [anterior2, setAnterior2] = useState({ index: '' });
  const [parejaEncontrada, setParejaEncontrada] = useState(false);


  useEffect(() => {
    if ((anterior1.index !== '') && (anterior2.index !== '')) {
      compareImagenes();
    }
  }, [anterior1, anterior2])


  function setCardVisible(index) {
    //Logica para que solo se puedan marcar dos cards

    setLogos(logos => {
      const sonTrue = logos.filter(e => e.isVisible === true);
      if (parejaEncontrada === false) {
        if (sonTrue.length < 2) {
          return logos.map(logo => logo.index === index ? { ...logo, isVisible: true } : logo);
        } else {
          return [...logos];
        }
      } else {
        if (sonTrue.length < (sonTrue.length + sonTrue.length)) {
          return logos.map(logo => logo.index === index ? { ...logo, isVisible: true } : logo);
        } else {
          return [...logos];
        }
      }
    });

    //Setear Imagenes para la comparación
    if ((anterior1.index !== '') && (anterior2.index !== '')) {
    } else {
      if (anterior1.index === '') {
        setAnterior1({ index: index });
      } else if (anterior1.index !== '') {
        setAnterior2({ index: index });
      }
    }
  }

  function compareImagenes() {
    setLogos(logos => {
      if (logos[anterior1.index].img === logos[anterior2.index].img) {
        setDisableButton('');
        setAnterior1({ index: '' });
        setAnterior2({ index: '' });
        setParejaEncontrada(true);
        return [...logos];
      } else {
        setTimeout(() => {
          //Entender mas esto
          setLogos(logo => logo.map(l => {
            if (l.index === anterior1.index || l.index === anterior2.index) {
              if (logos[anterior1.index].img === logos[anterior2.index].img) {
                return { img: l.img, isVisible: l.isVisible, index: l.index }
              } else {
                return { img: l.img, isVisible: false, index: l.index }
              }
            } else {
              return l;
            }
          }));
          setDisableButton('');
          setAnterior1({ index: '' });
          setAnterior2({ index: '' });
        }, 2000);
        return logos;
      }
    });
  }


  function shuffle() {
    //Hacer el shuffle
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
        <button className="border-2 border-sky-500 px-3 py-1 rounded-lg hover:bg-sky-500"
          onClick={() => shuffle()}>Shuffle</button>
      </div>
    </>


  )
}

export default Memory
