import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from "../../actions/resultActions";


const Popup = () => {
  const {popup, activeItem} = useSelector(state => state);
  const dispatch = useDispatch();
  const popupVisible = popup ? {'display':'block'} : {'display':'none'} 
  const resultPic = (index) => activeItem.galery ? "assets/img/" + activeItem.galery[index] : null
  const picArr = (item) => {
    // console.log(item);
    if (!item) {
      return null
    } else {
    return item.map((el, index) => {
        return (
          <li className="gallery__item gallery__item--active">
            <img src={resultPic[index]} srcSet={resultPic[index]+"-2x.jpg 2x"} alt={activeItem.title} width="124" height="80"/>
          </li>
        )
      });}
  }

  return (
    <section className="popup" style={popupVisible}>
        <div className="popup__inner">
          <button className="popup__close" type="button" aria-label="Закрыть" 
            onClick={(e) => {
              dispatch(closePopup());
              // console.log(e.target)
            }
            }>
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L9.41421 8L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8 9.41421L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292893 15.7071C-0.0976311 15.3166 -0.0976311 14.6834 0.292893 14.2929L6.58579 8L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"/>
            </svg>
          </button>
          <div className="popup__date">3 дня назад</div>
          <h3 className="popup__title">{activeItem.title}</h3>
          <div className="popup__price">{activeItem.price}</div>
          <div className="popup__columns">
            <div className="popup__left">
              <div className="popup__gallery gallery">
                <button className="gallery__favourite fav-add">
                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="gallery__main-pic">
                  <img src={resultPic(0)} srcSet={resultPic(0)+ " 2x"}  width="520" height="340" alt="Ford Mustang 2020"/>
                </div>
                <ul className="gallery__list">
                  {picArr(activeItem.galery)}
                  <li className="gallery__item gallery__item--active">
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
                  </li>
                </ul>
              </div>
              <ul className="popup__chars chars">
                <li className="chars__item">
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
                </li>
              </ul>
              <div className="popup__seller seller seller--good">
                <h3>Продавец</h3>
                <div className="seller__inner">
                  <a className="seller__name" href="#">Автосалон Pony Car</a>
                  <div className="seller__rating"><span>4.9</span></div>
                </div>
              </div>
              <div className="popup__description">
                <h3>Описание товара</h3>
                <p>Форд Мустанг 2020 года выпуска, один владелец, пробег 1 км, объём двигателя 5,8 литра, 662 л.с., максимальная скорость — 320 км/ч. Причина продажи — страшно ездить.</p>
              </div>
            </div>
            <div className="popup__right">
              <div className="popup__map">
                <img src="assets/img/map.jpg" width="268" height="180" alt="Москва, Нахимовский проспект, дом 5"/>
              </div>
              <div className="popup__address">Москва, Нахимовский проспект, дом 5</div>
            </div>
          </div>
        </div>
      </section>
  )
}
export default Popup;