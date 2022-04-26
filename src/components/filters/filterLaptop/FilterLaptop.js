const FilterLaptop1 = () => {
  return (<div className="filter__laptop">
    <fieldset className="filter__type filter__type--laptop">
      <legend>Тип ноутбука</legend>
      <ul className="filter__checkboxes-list filter__checkboxes-list--laptop-ram">
        <li className="filter__checkboxes-item">
          <input className="visually-hidden" type="checkbox" name="laptop-type" value="ultra" id="ultra"/>
          <label htmlFor="ultra">Ультрабук</label>
        </li>
        <li className="filter__checkboxes-item">
          <input className="visually-hidden" type="checkbox" name="laptop-type" value="home" id="home"/>
          <label htmlFor="home">Домашний ноутбук</label>
        </li>
        <li className="filter__checkboxes-item">
          <input className="visually-hidden" type="checkbox" name="laptop-type" value="gaming" id="gaming"/>
          <label htmlFor="gaming">Игровой ноутбук</label>
        </li>
      </ul>
    </fieldset>
    <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
      <legend>Минимальный объем оперативной памяти</legend>
      <ul className="filter__radiobuttons-list">
        <li className="filter__radiobuttons-item">
          <input className="visually-hidden" type="radio" name="ram" value="0" id="any_ram" defaultChecked/>
          <label htmlFor="any_ram">Любой</label>
        </li>
        <li className="filter__radiobuttons-item">
          <input className="visually-hidden" type="radio" name="ram" value="4" id="4gb"/>
          <label htmlFor="4gb">4 Гб</label>
        </li>
        <li className="filter__radiobuttons-item">
          <input className="visually-hidden" type="radio" name="ram" value="8" id="8gb"/>
          <label htmlFor="8gb">8 Гб</label>
        </li>
        <li className="filter__radiobuttons-item">
          <input className="visually-hidden" type="radio" name="ram" value="16" id="16gb"/>
          <label htmlFor="16gb">16 Гб</label>
        </li>
      </ul>
    </fieldset>
    <fieldset className="filter__radiobuttons filter__radiobuttons--diagonal">
      <legend>Минимальная диагональ экрана</legend>
      <ul className="filter__radiobuttons-list">
        <li className="filter__radiobuttons-item">
          <input className="visually-hidden" type="radio" name="diagonal" value="0" id="any_diagonal" defaultChecked/>
          <label htmlFor="any_diagonal">Любая</label>
        </li>
        <li className="filter__radiobuttons-item">
          <input className="visually-hidden" type="radio" name="diagonal" value="13" id="13in"/>
          <label htmlFor="13in">13<sup>″</sup></label>
        </li>
        <li className="filter__radiobuttons-item">
          <input className="visually-hidden" type="radio" name="diagonal" value="14" id="14in"/>
          <label htmlFor="14in">14<sup>″</sup></label>
        </li>
        <li className="filter__radiobuttons-item">
          <input className="visually-hidden" type="radio" name="diagonal" value="15" id="15in"/>
          <label htmlFor="15in">15<sup>″</sup></label>
        </li>
        <li className="filter__radiobuttons-item">
          <input className="visually-hidden" type="radio" name="diagonal" value="17" id="17in"/>
          <label htmlFor="17in">17<sup>″</sup></label>
        </li>
      </ul>
    </fieldset>
    <fieldset className="filter__type filter__type--laptop-processor">
      <legend>Тип процессора</legend>
      <ul className="filter__checkboxes-list filter__checkboxes-list--laptop-processor">
        <li className="filter__checkboxes-item">
          <input className="visually-hidden" type="checkbox" name="processor" value="i3" id="i3"/>
          <label htmlFor="i3">Intel Core i3</label>
        </li>
        <li className="filter__checkboxes-item">
          <input className="visually-hidden" type="checkbox" name="processor" value="i5" id="i5"/>
          <label htmlFor="i5">Intel Core i5</label>
        </li>
        <li className="filter__checkboxes-item">
          <input className="visually-hidden" type="checkbox" name="processor" value="i7" id="i7"/>
          <label htmlFor="i7">Intel Core i7</label>
        </li>
      </ul>
    </fieldset>
  </div>)
}

export default FilterLaptop1;