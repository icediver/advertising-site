import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { priceChanged } from "../../../actions/resultActions";

const RangeSlider = ({range}) => {
  const firstRender = useRef(true);
  const dispatch = useDispatch();
  // let minPrice = 0;
  // let maxPrice = 10000000;
    const mySlider = () => {
      // eslint-disable-next-line
      return new rSlider({
        target: '#sampleSlider',
        values: {min:range[0], max:range[1]},
        range: true,
        tooltip: true,
        scale: true,
        labels: true,
        
        step: range[1]/100,
        onChange: function (vals) {
          let n = vals.split(',')
          dispatch(priceChanged(n));
          // console.log(n);
      }
      });
    }
    useEffect(() => {
      //  console.log(mySlider().onChange());
      // eslint-disable-next-line
      // mySlider();
      
        if (firstRender.current) {
          firstRender.current = false;
        } else {
          // myProp = 'some val';
          mySlider();
        }
   

      // eslint-disable-next-line
    },[]);
    return (
      
       <div className="filter__range">
        <label htmlFor="range">Цена, ₽</label>
        <input type="text" id="sampleSlider" />
        
      </div>
  
     
    )
}

export default RangeSlider;