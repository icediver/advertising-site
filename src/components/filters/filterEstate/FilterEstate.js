const FilterEstate = () => {
  return (
    <div className="filter__estate">
      <fieldset className="filter__type filter__type--estate">
        <legend>Тип недвижимости</legend>
        <ul className="filter__checkboxes-list filter__checkboxes-list--estate">
          <li className="filter__checkboxes-item">
            <input
              className="visually-hidden"
              type="checkbox"
              name="type"
              value="house"
              id="house"
            />
            <label htmlFor="house">Дом</label>
          </li>
          <li className="filter__checkboxes-item">
            <input
              className="visually-hidden"
              type="checkbox"
              name="type"
              value="flat"
              id="flat"
            />
            <label htmlFor="flat">Квартира</label>
          </li>
          <li className="filter__checkboxes-item">
            <input
              className="visually-hidden"
              type="checkbox"
              name="type"
              value="apartment"
              id="apartments"
            />
            <label htmlFor="apartments">Апартаменты</label>
          </li>
        </ul>
      </fieldset>
      <div className="filter__min-square">
        <label htmlFor="square">
          Минимальная площадь, м<sup>2</sup>
        </label>
        <input
          type="number"
          id="square"
          name="area"
          min="1"
          defaultValue="1"
          placeholder="1"
        />
      </div>
      <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
        <legend>Количество комнат</legend>
        <ul className="filter__ram-list">
          <li className="filter__radiobuttons-item">
            <input
              className="visually-hidden"
              type="radio"
              name="rooms-count"
              value="0"
              id="any_room"
              defaultChecked
            />
            <label htmlFor="any_room">Любое</label>
          </li>
          <li className="filter__radiobuttons-item">
            <input className="visually-hidden" type="radio" name="rooms-count" value="1" id="one" />
            <label htmlFor="one">1</label>
          </li>
          <li className="filter__radiobuttons-item">
            <input className="visually-hidden" type="radio" name="rooms-count" value="2" id="two" />
            <label htmlFor="two">2</label>
          </li>
          <li className="filter__radiobuttons-item">
            <input className="visually-hidden" type="radio" name="rooms-count" value="3" id="three" />
            <label htmlFor="three">3</label>
          </li>
          <li className="filter__radiobuttons-item">
            <input className="visually-hidden" type="radio" name="rooms-count" value="4" id="four" />
            <label htmlFor="four">4</label>
          </li>
          <li className="filter__radiobuttons-item">
            <input
              className="visually-hidden"
              type="radio"
              name="rooms-count"
              value="5"
              id="fivemore"
            />
            <label htmlFor="fivemore">5+</label>
          </li>
        </ul>
      </fieldset>
    </div>
  );
};

export default FilterEstate;

