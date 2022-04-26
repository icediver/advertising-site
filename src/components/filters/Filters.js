import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { activeCategoryChanged, optionsFliterChanged } from "../../actions/resultActions";
import RangeSlider from "./rangeSlider";
import FilterEstate from "./filterEstate/FilterEstate";
import FilterCamera from "./filterCamera/FilterCamera";
import FilterLaptop from "./filterLaptop/FilterLaptop";
import FilterCars from "./filterCars/FilterCars";

const FilterCategories = ({category}) => {
  switch (category) {
    case 'estate':
      return <FilterEstate />
    case 'camera':
      return <FilterCamera />
    case 'laptops':    
    // console.log('laptops');
      return <FilterLaptop />
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
  const {priceRange, activeCategory, items, filteredItems } = useSelector(state => state);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    
    const filters = getDataFromForm(form);
    console.log(filters);
    // console.log(form.querySelectorAll('input')[0].value.split(',')[1]);
    const filterOptions = (filters, element) => {
      //если ни один чекбокс не отмечен идем дальше
      let answer = Object.keys(filters['checkboxes']).length === 0;
      for (let type in filters) {
        for (let key in filters[type]) {
          if (type === 'checkboxes' && !answer) {
            answer = filters[type][key].includes(element[key]);
          } 
          if (answer && (type === 'select'  || type === 'inputs' || type === 'radio') && key !== 'categories') {
            (/^(0|[1-9]\d*)$/.test(filters[type][key][0])) ?
                  //если число то --
                  answer = Number(filters[type][key][0]) <= Number(element[key]) :
                  //если строка то --
                  answer = filters[type][key][0] === element[key] || filters[type][key][0] === 'any';
                  // console.log(filters[type][key][0], element[key], filters[type][key][0] <= element[key], key)
            // console.log(answer, filters[type][key][0], element[key], key);
          }
        }
      }

      console.log('finish ', answer );
      return answer;
    };
    // console.log(filteredItems)
    // filterItems2(filters, items[0]);
    dispatch(activeCategoryChanged(activeCategory));
    const category = items.filter(el => el.category === activeCategory)
    const result = category.filter(el => filterOptions(filters, el));
    // console.log(result);
    dispatch(optionsFliterChanged(result));
    }
  
  return  (
    <section className="onlineshop-app__filter filter">
              <h2 className="title filter__title">Фильтр</h2>
              <form className="filter__form" action="#" method="post" onSubmit={onSubmit}>
                <div className="filter__select-wrapper">
                  <label htmlFor="categories">Категория товаров</label>
                  <select 
                        id="categories" 
                        name="categories" 
                        onChange={(e) => {
                          dispatch(activeCategoryChanged(e.target.value));
                          }}>
                    <option value="all" defaultValue>Все</option>
                    <option value="estate">Недвижимость</option>
                    <option value="laptops">Ноутбуки</option>
                    <option value="camera">Фотоаппараты</option>
                    <option value="cars">Автомобили</option>
                  </select>
                  <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
                  </svg>
                </div>
                <RangeSlider range={priceRange}/>
                <FilterCategories category={activeCategory}/>
                <button className="button filter__button" type="submit">Показать</button>
            </form>
    </section>
              
  ) 
}

export default Filters;