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
  const [isLoadingCheck, setIsLoadingCheck] = useState(false);
  const [anterior1, setAnterior1] = useState({ index: '', img: '' });
  const [anterior2, setAnterior2] = useState({ index: '', img: '' });

  useEffect(() => {
    if ((anterior1.index !== '') && (anterior2.index !== '')) {
      setIsLoadingCheck(true);
      //Hasta que no se resuelva el setTimeout no se puede hacer click
      setTimeout(() => {
        setLogos(logos => logos.map(logo => {
          //Condicion para comprobar que las imagenes son iguales en el array
          if (logo.index === anterior1.index || logo.index === anterior2.index) {
            if (anterior1.img === anterior2.img) {

              return { ...logo };
            } else {

              return { img: logo.img, isVisible: false, index: logo.index }
            }
          } else {
            return logo
          }
        }));
        setIsLoadingCheck(false);
      }, 2000);



      setAnterior1({ index: '', img: '' });
      setAnterior2({ index: '', img: '' });
    }
  }, [anterior2.index]);


  function setCardVisible(index, img) {
    /* Logica para que solo se puedan marcar dos cards 
    y ademas que no se puedan marcar otra vez los boxes que estan en true */
    if (!isLoadingCheck) {
      let logos_array = logos;
      logos_array.map(logo => {
        if (logo.index === index) {
          if (!logo.isVisible) {
            if ((anterior1.index === '') || (anterior2.index === '')) {
              if (anterior1.index === '') {
                setAnterior1({ index: index, img: img });
              } else {
                setAnterior2({ index: index, img: img });
              }
            }
            setLogos(logos => logos.map(logo => {
              if (logo.index === index) {
                return { ...logo, isVisible: true }
              }
              return { ...logo };
            }));
          } else {
            return logo
          }
        }
      })
    }
  }

  const shuffleCard = () => {
    //Hacer un shuffle de las cards
    const logosShuffle = logos.sort(() => Math.random() - 0.5);
    setLogos([...logosShuffle]);
  }




  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-4">
          <Items logos={logos} setCardVisible={setCardVisible} disableButton={disableButton} />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="border-2 border-sky-500 px-3 py-1 rounded-lg hover:bg-sky-500" onClick={() => shuffleCard()}>Shuffle</button>
      </div>
    </>


  )
}

export default Memory
