import './product-card.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showPopup, setActiveItem, } from '../../actions/resultActions';
const ProductCards = ({element}) => {
  const dispatch = useDispatch();
  const showPopUp = (el) => {
    dispatch(setActiveItem(el));
    dispatch(showPopup());
  }
  return (
    <>
      <button className="product__favourite fav-add" type="button" aria-label="Добавить в избранное">
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </button>
      <ImageNavigation item={element}/>
      <div className="product__content">
        <h3 className="product__title" onClick={()=> showPopUp(element)}>
          <span>{element.name} </span>
        </h3>
        <div className="product__price">{Number(element.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</div>
        <div className="product__address">Город: {element.address.city}, {element.address.street}, {element.address.building}</div>
      </div>
    </>

  );

};

const ImageNavigation = ({item}) => {
  const [img, setImg] = useState(item.photos[0]) 
  
  const activeImageClass = (e) => {
    const imageBtns = e.target.parentNode.querySelectorAll('.product__navigation-item');
    imageBtns.forEach((el, i) => {
      el.classList.remove('product__navigation-item--active');  
      
      if (el === e.target  && i < item.photos.length) {
        el.classList.add('product__navigation-item--active');
        setImg(item.photos[i]);        
      }
    })
    
  }
  
  return(
    <div className="product__image">
      <div className="product__image-more-photo hidden">+2 фото</div>
      <img src={img} srcSet={img} width="318" height="220" alt={item.name}/>
      <div className="product__image-navigation">
    
        <span className={'product__navigation-item product__navigation-item--active'} onClick={e => activeImageClass(e)}></span>
        <span className={'product__navigation-item '} onClick={e => activeImageClass(e)}></span>
        <span className={'product__navigation-item '} onClick={e => activeImageClass(e)}></span>
        <span className={'product__navigation-item '} onClick={e => activeImageClass(e)}></span>
        <span className={'product__navigation-item '} onClick={e => activeImageClass(e)}></span>
      </div>
    </div>
    
  )
}

export default ProductCards;