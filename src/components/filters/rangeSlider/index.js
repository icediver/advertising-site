import { useEffect,  } from "react";
import { useDispatch,  } from 'react-redux';
import { priceChanged } from "../../../actions/resultActions";
import $ from "jquery";
// import ionRangeSlider from 'ion-rangeslider';
import './ionrangeslider.css'
import './my-range-slider.css'

const RangeSlider = ({priceMax}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    $("#example_id").ionRangeSlider({
      type: "double",
      skin: "modern",
      grid: true,
      min: 0,
      // max: priceMax,
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
    // const slider = $("#example_id").data(ionRangeSlider);
    // slider.update({
    //   from: 0,
    //   to: priceMax
    // })      
    // // slider.reset();
    // slider.max = priceMax
  },[priceMax]);
  return ( 
    <>
      <div className="range-slider">
        <input type="range" min="0" max="1000" defaultValue ="0" className="slider" id="slider-1"/>
        <input type="range" min="0" max="1000" defaultValue ="1000" className="slider" id="slider-2"/>
      </div>
      <div className="filter__range">
        <label htmlFor="range">Цена, ₽</label>
        <input type="hidden" id="example_id" name="example_name" value="" data-max={priceMax} onChange={() => {} }/>
      </div>
    </>     
  )
}

export default RangeSlider;