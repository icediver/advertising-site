import Filters from "../filters/Filters";
import Results from "../results/Results";
import Popup from "../popup/popup";
import { useEffect } from "react";
import {useHttp } from '../../hooks/http.hook';
import { useDispatch, useSelector } from 'react-redux';
import { productsFetching, productsFetched,  getMaxPrice } from '../../actions/resultActions';
import transformDataFormat from "../../services/transform-data-format";

export const Main = () => {
  const { priceMax } = useSelector(state => state);
  const dispatch = useDispatch();
  const {request} = useHttp();
  useEffect(() => {
    dispatch(productsFetching());
    // request("http://localhost:3001/products")
    request("https://main-shop-fake-server.herokuapp.com/db")
      .then(data => data.products.map(el => transformDataFormat(el)))
      .then(data => { 
        
        if (localStorage['products']) {
          const products = JSON.parse(localStorage.getItem('products'));
          products.forEach((el, key) => {
            data[key].favorite = el.favorite;
            data[key].id = el.id;
          });
          return products;
        } else {
          localStorage.setItem('products', JSON.stringify(data));
          return data
        }
      })
    // request('http://localhost:3001/items')
      .then((data => dispatch(productsFetched(data))))
      .then(data => {
        return dispatch(getMaxPrice(data.payload))
      })
      
      
  }, []);
  // console.log(priceMax);
  return  (
    <>
      <main>
        <section className="onlineshop-app">
          <h1 className="visually-hidden">Главная</h1>
          <div className="onlineshop-app__blueline">
            <div className="container" style={{'width': 1270, }}></div>
          </div>
          <div className="onlineshop-app__wrapper">
            <Filters priceMax={priceMax}/>
            <Results/>
          </div>
        </section>

      </main>
      <Popup/>
    </>
    
  ) 
}

export default Main;