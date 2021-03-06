// import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeCategoryChanged, optionsFilterChanged } from '../../actions/resultActions';
import MyRangeSlider from './rangeSlider/double-range-slider';
import FilterEstate from './filterEstate/FilterEstate';
import FilterCamera from './filterCamera/FilterCamera';
import FilterLaptop from './filterLaptop/FilterLaptop';
import FilterCars from './filterCars/FilterCars';

const FilterCategories = ({category, priceMax}) => {
  switch (category) {
  // case 'all':
  //   return <RangeSlider priceMax={priceMax}/>
  case 'estate':
    return <FilterEstate />
  case 'camera':
    return <FilterCamera />
  case 'laptops':    
    return   <FilterLaptop />
      
  case 'cars':    
    return <FilterCars />
          
  default: return null
  }
} 
const getDataFromForm = (form) => {           
  const checkbox = [...form.querySelectorAll('input')]
    .filter(el => el.checked && el.type === 'checkbox')
    .reduce((acc, el, index) => {
      // el.name.includes('-type') ? acc[`${el.name}-0${index}`] = el.value : acc[el.name] = el.value;
      acc[el.name] = !acc[el.name] ? [el.value] : [...acc[el.name], el.value];
      return acc;
    }, {});                     
  const inputs = [...form.querySelectorAll('input')]
    .reduce((acc, el, index) => {
      if (el.type === 'number') {
        acc[el.name] = !acc[el.name] ? [el.value] : [...acc[el.name], el.value];;
      } 
          
      return acc;
    }, {});     
  const radio = [...form.querySelectorAll('input')]
    .filter(el => el.checked && el.type === 'radio')
    .reduce((acc, el, index) => {
      // if (el.type === 'radio') {
      acc[el.name] = !acc[el.name] ? [el.value] : [...acc[el.name], el.value];;
      // }        
      return acc;
    }, {});     
  const select = [...form.querySelectorAll('select')]
  // .filter(el => el.checkbox)
    .reduce((acc, el, index) => { 
      acc[el.name] = !acc[el.name] ? [el.value] : [...acc[el.name], el.value];;
      return acc;
    }, {});
  const priceRange = {
    'min-price': form.querySelectorAll('input')[0].value.split(',')[0],
    'max-price': form.querySelectorAll('input')[0].value.split(',')[1],
  }
  return {
    checkboxes: {...checkbox},
    select: {...select},
    inputs: {...inputs},
    radio: {...radio},
    range: {...priceRange}
  }
}

const Filters = () => {  
  const dispatch = useDispatch();  
  const { activeCategory, products, priceMax } = useSelector(state => state);
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target
    
    const filters = getDataFromForm(form);    
    // console.log(filters);
    
    const filterOptions = (filters, element) => {
      //???????? ???? ???????? ?????????????? ???? ?????????????? ???????? ????????????
      let answer = Object.keys(filters['checkboxes']).length === 0;
      
      for (const type in filters) {
        // console.log('------------------');
        
        for (const key in filters[type]) {
          if (type === 'checkboxes' && !answer && type !== 'categories') {
            answer = element.filters[key] === '-' ? true : filters[type][key].includes(element.filters[key][1]);
            // console.log(filters[type][key][0] , element.name, element.filters[key][1],  element.filters[key][0], key, answer);
          } 
          if (answer && (type === 'select'  || type === 'inputs' || type === 'radio') && key !== 'categories') {
            // (/^[0-9]+$/.test(filters[type][key][0])) ?
            (/^(0|[1-9]\d*)$/.test(filters[type][key][0])) ?
            // (/\d{1,2}[,.]\d{1,2}/.test(filters[type][key][0])) ?
            //???????? ?????????? ???? --
              answer = (Number(filters[type][key][0]) <= Number(element.filters[key][1])) || 
            element.filters[key][1] === '-' :
            //???????? ???????????? ???? --
              answer = filters[type][key][0] === element.filters[key][1] || filters[type][key][0] === 'any' ;
            // console.log('filter: ' + filters[type][key][0], 'element: ' + element.filters[key][1],  element.filters[key][0], key,  element.name, answer);
            
            // !answer ? console.log('filter', Number(filters[type][key][0]), '<=', Number(element.filters[key]), key,  (Number(filters[type][key][0]) <= Number(element.filters[key]))) : console.log('')
            // !answer ? console.log((/\d{1,2}[,.]\d{1,2}/.test(filters[type][key][0]))) : console.log('')
          }
        }
      }
      // console.log(element.name, answer)
      return answer;
    };
    dispatch(activeCategoryChanged(activeCategory));
    const category = products.filter(el => el.category === activeCategory)
    const result = category.filter(el => filterOptions(filters, el));

    dispatch(optionsFilterChanged(result));
  }
  return  (
    <section className="onlineshop-app__filter filter">
      <h2 className="title filter__title">????????????</h2>
      <form className="filter__form" action="#" method="post" onSubmit={onSubmit}>
        <div className="filter__select-wrapper">
          <label htmlFor="categories">?????????????????? ??????????????</label>
          <select 
            id="categories" 
            name="categories" 
            onChange={(e) => {
              dispatch(activeCategoryChanged(e.target.value));
            }}>
            <option value="all" defaultValue>??????</option>
            <option value="estate">????????????????????????</option>
            <option value="laptops">????????????????</option>
            <option value="camera">????????????????????????</option>
            <option value="cars">????????????????????</option>
          </select>
          <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
          </svg>
        </div>
        <MyRangeSlider/>

        {/* <RangeSlider priceMax={priceMax}/>         */}
        <FilterCategories category={activeCategory} priceMax={priceMax}/>
        <button className="button filter__button" type="submit">????????????????</button>
      </form>
    </section>
              
  ) 
}

export default Filters;