import React, { useEffect, useState } from 'react';
import './double-range-slider.css'
import {  useDispatch, useSelector } from 'react-redux';
import { priceChanged } from "../../../actions/resultActions";



const MyRangeSlider = () => {
  const { priceMax } = useSelector(state => state);
  const [filterPrice, setFilterPrice] = useState([0, 100]);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(priceChanged([filterPrice[0]*priceMax / 100, filterPrice[1]*priceMax / 100]));
  },[filterPrice]);
  useEffect(() => {
    setFilterPrice([0, 100]);
  },[priceMax]);
  

  return (
    <div className="wrapper">
      <header>
        <h2>Выберите диапазон цены</h2>
      </header>
      <div className="price-input">
        <div className="field field-left">
          <span>Min:</span>
          <input type="text" className="input-min"  value={ (filterPrice[0]*priceMax / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") } onChange={() => {}}/>
        </div>
        <div className="field">
          <span style={{'marginLeft': '27px'}}>Max:</span>
          <input type="text" className="input-max"  value={ (filterPrice[1]*priceMax / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }  onInput={() => {}}/>
        </div>
      </div>
      <img src="./pointer.svg" alt="" />
      <div className="slider">
        <div className="progress" style={{'right': 100-filterPrice[1] + '%', 'left': filterPrice[0]  + '%'}}></div>
      </div>
      <div className="range-input">
        <input type="range" className="range-min" min="0" max="100" value={filterPrice[0]} step="1" 
          onInput={(e) => {
            setFilterPrice([parseInt(e.currentTarget.value), filterPrice[1]]);
            // const progressLine = e.currentTarget.parentNode.previousSibling.childNodes[0];
            // progressLine.style.left = parseInt(e.currentTarget.value)  + '%';
            // console.log(filterPrice)
          }}/>
        <input 
          type="range" 
          className="range-max" 
          min="0" 
          max="100" 
          value={filterPrice[1]} 
          step="1" 
          
          onInput={(e) => {
            setFilterPrice([filterPrice[0], parseInt(e.currentTarget.value)]);
            // const progressLine = e.currentTarget.parentNode.previousSibling.childNodes[0];
            // progressLine.style.right = 100 - parseInt(e.currentTarget.value)  + '%';
            // console.log(filterPrice)
          }}/>
        {/* <input 
          type="range" 
          className="range-min" 
          min="0" max={priceMax} 
          defaultValue="0"
          step="1000"
          onInput={e => {
            setFilterPrice([parseInt(e.currentTarget.value), filterPrice[1]]);
            const progressLine = e.currentTarget.parentNode.previousSibling.childNodes[0];
            progressLine.style.left = ((parseInt(e.currentTarget.value)/priceMax) * 100) + '%';
            
          }}/>
        <input 
          type="range" 
          className="range-max" 
          min="0" max={priceMax} 
          defaultValue={priceMax} 
          step="1000"
          onInput={e => {
            setFilterPrice([filterPrice[0], parseInt(e.currentTarget.value)]);
            const progressLine = e.currentTarget.parentNode.previousSibling.childNodes[0];
            progressLine.style.right = 100 - (parseInt(e.currentTarget.value)/priceMax) * 100 + '%';
          }}/> */}
      </div>
    </div>

  )
}

export default MyRangeSlider;