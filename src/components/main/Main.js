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
    // request('http://localhost:3001/items')
      .then((data => dispatch(productsFetched(data))))
      .then(data => dispatch(getMaxPrice(data.payload)))
      
      
  }, [priceMax]);
  // console.log(priceMax);
  return  (
    <>
      <main>
        <section className="onlineshop-app">
          <h1 className="visually-hidden">Главная</h1>
          <div className="onlineshop-app__blueline"></div>
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