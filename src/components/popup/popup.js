import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from "../../actions/resultActions";
import Maps from './maps';

const dictionary =  {
  category: {
    "estate": {
      "type": "Тип недвижимости",
      "area": "Площадь, м2",
      "rooms-count": "Количество комнат"
    },
    "cars": {
      "year": "Год выпуска",
      "transmission": "Коробка передач",
      "car-body": "Тип кузова", 
    },
    "laptops": {
      "type": "Тип",
      "ram-value": "Оперативка",
      "screen-size": "Диагональ",
      "cpu-type": "Процессор"
    },
    "camera": {
      "type": "Тип фотоаппарата",
      "matrix-resolution": "Матрица",
      "supporting": "Разрешение видео"
    }

  }

}

const Popup = () => {
  const {activeItem} = useSelector(state => state);
  return Object.keys(activeItem).length !== 0 ? <ActivePopup /> : null 
  
}


const ActivePopup = () => {

  const {popup, activeItem} = useSelector(state => state);
  const dispatch = useDispatch();
  const [mainPic, setMainPic] = useState(null);
  const popupVisible = popup ? {'display':'block'} : {'display':'none'} 
  
  useEffect(() => {
    activeItem.photos ? setMainPic(activeItem.photos[0]) : setMainPic(null)
  }, [activeItem])

  const pic = activeItem.photos ?  activeItem.photos.map((el, index) => {
    return (        
      <li className={`gallery__item ${index === 0 ? 'gallery__item--active' : ''  }`} key={index}  onClick={e => showPicture(e.target)}>
        <img src={activeItem.photos[index]} alt={activeItem.photos[index]} width="124" height="80"/>
      </li>
        
    )
  }) : null;
  // console.log(activeItem);
  const options = Object.keys(activeItem.filters).map((key, index) => {
    // console.log(dictionary['category'][activeItem.category][key]);
    // console.log(activeItem.filters[key]);

    return (        
      <li className="chars__item" key={index}>
        <div className="chars__name">{dictionary['category'][activeItem.category][key]}</div>
        <div className="chars__value">{activeItem.filters[key][0]}</div>
      </li>
        
    )
  });
 

  const showPicture = (target) => {
    const currentLi = target.parentNode;
    const list = currentLi.parentNode.querySelectorAll('li');
    list.forEach(el => {
      el.classList.remove('gallery__item--active')
      if (el === currentLi) {
        el.classList.add('gallery__item--active')
        setMainPic(target.getAttribute('src'));
      }
    })
  } 
  return (
    <section className="popup" style={popupVisible}>
      <div className="popup__inner">
        <button className="popup__close" type="button" aria-label="Закрыть" 
          onClick={(e) => {
            dispatch(closePopup());
            const list = e.target.closest('.popup').querySelectorAll('.gallery__item');
            list.forEach(el => {
              el.classList.remove('gallery__item--active');

            })
            list[0].classList.add('gallery__item--active');
          }
          }>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L9.41421 8L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8 9.41421L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292893 15.7071C-0.0976311 15.3166 -0.0976311 14.6834 0.292893 14.2929L6.58579 8L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"/>
          </svg>
        </button>
        <div className="popup__date">3 дня назад</div>
        <h3 className="popup__title">{activeItem.name}</h3>
        <div className="popup__price">{activeItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</div>
        <div className="popup__columns">
          <div className="popup__left">
            <div className="popup__gallery gallery">
              <button className="gallery__favourite fav-add">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="gallery__main-pic">
                <img src={mainPic} srcSet={mainPic + " 2x"}  width="520" height="340" alt={activeItem.name}/>
              </div>
              <ul className="gallery__list">
                {pic}
                {/* <li className="gallery__item gallery__item--active">
                  <img src="assets/img/car1.jpg" srcSet="assets/img/car1-2x.jpg 2x" alt="Ford Mustang 2020" width="124" height="80"/>
                </li>
                <li className="gallery__item">
                  <img src="assets/img/car2.jpg" srcSet="assets/img/car2-2x.jpg 2x" alt="Ford Mustang 2020" width="124" height="80"/>
                </li>
                <li className="gallery__item">
                  <img src="assets/img/car3.jpg" srcSet="assets/img/car3-2x.jpg 2x" alt="Ford Mustang 2020" width="124" height="80"/>
                </li>
                <li className="gallery__item">
                  <img src="assets/img/car4.jpg" srcSet="assets/img/car4-2x.jpg 2x" alt="Ford Mustang 2020" width="124" height="80"/>
                </li>
                <li className="gallery__item">
                  <img src="assets/img/car5.jpg" srcSet="assets/img/car5-2x.jpg 2x" alt="Ford Mustang 2020" width="124" height="80"/>
                </li> */}
              </ul>
            </div>
            <ul className="popup__chars chars">
              {options}
              {/* <li className="chars__item">
                <div className="chars__name">Год выпуска</div>
                <div className="chars__value">1999</div>
              </li>
              <li className="chars__item">
                <div className="chars__name">Коробка передач</div>
                <div className="chars__value">механическая</div>
              </li>
              <li className="chars__item">
                <div className="chars__name">Тип кузова</div>
                <div className="chars__value">внедорожник</div>
              </li> */}
            </ul>
            <div className="popup__seller seller seller--good">
              <h3>Продавец</h3>
              <div className="seller__inner">
                <div className="seller__name" href="#">{activeItem.seller.fullname}</div>
                <div className="seller__rating"><span>{activeItem.seller.rating}</span></div>
              </div>
            </div>
            <div className="popup__description">
              <h3>Описание товара</h3>
              <p>{activeItem.description}</p>
            </div>
          </div>
          <div className="popup__right">
            <div className="popup__map">
              <Maps />
              {/* <img src="assets/img/map.jpg" width="268" height="180" 
                alt={`${activeItem.address.city}, ${activeItem.address.street}, ${activeItem.address.building}`}/> */}
            </div>
            <div className="popup__address">{activeItem.address.city}, {activeItem.address.street}, {activeItem.address.building}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Popup;