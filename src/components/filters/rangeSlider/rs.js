import React, { Component } from 'react'
import $ from "jquery";
import ionRangeSlider from 'ion-rangeslider';
import './ionrangeslider.css'

class Rs extends Component {
  componentDidMount() {
    console.log(this.props.priceMax);
    this.$el = $(this.el);
    this.$el = $("#example_id").ionRangeSlider({
      type: "double",
      skin: "modern",
      grid: true,
      min: 0,
      max: this.props.priceMax,
      force_edges: true,
      hide_min_max: true,
      // from: 0,
      // to: maxPrice,
      postfix: " ₽",
      onChange: obj => {
        // console.log(Number(obj.from),'--',Number(obj.to));
        // dispatch(priceChanged([Number(obj.from),Number(obj.to)]));
      },
    });
  }
  componentDidUpdate() {

    console.log(this.$el)
    
    
  }
  componentWillUnmount() {
    console.log('WillUnmount')
    this.$el.ionRangeSlider('destroy');
  }
  render() {
    return (
      <div>
        <div className="filter__range">
          <label htmlFor="range">Цена, ₽</label>
          <input type="hidden" id="example_id" name="example_name" value=""  onChange={() => {} }/>
        </div>
      </div>
    )
  }
}

export default Rs;