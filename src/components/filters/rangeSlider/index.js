import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { priceChanged } from "../../../actions/resultActions";
import $ from "jquery";
import ionRangeSlider from 'ion-rangeslider';
import './ionrangeslider.css'

const RangeSlider = () => {
  const firstRender = useRef(true);
  const dispatch = useDispatch();
  const {priceMax} = useSelector(state  => state);

  
  useEffect(() => {
    /* if (firstRender.current) {
      firstRender.current = false;
    } else {
      // myProp = 'some val';
      // mySlider();
    } */
    if (priceMax > 1){
      $("#example_id").ionRangeSlider({
        type: "double",
        skin: "modern",
        grid: true,
        min: 0,
        max: priceMax,
        force_edges: true,
        hide_min_max: true,
        // from: 0,
        // to: maxPrice,
        postfix: " ₽",
        onChange: obj => {
          // console.log(Number(obj.from),'--',Number(obj.to));
          dispatch(priceChanged([Number(obj.from),Number(obj.to)]));
        },
      });
    }
  },[priceMax]);
  return (      
    <div className="filter__range">
      <label htmlFor="range">Цена, ₽</label>
      <input type="hidden" id="example_id" name="example_name" value="" onChange={() => {} }/>
    </div>
  
     
  )
}

export default RangeSlider;