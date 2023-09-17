import { CarsItem } from 'components/CarsItem/CarsItem';
import { Modal } from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/cars/thunks';
import { makeList } from './makeList';

const { useEffect, useState } = require('react');

export const CarList = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();
  const endOfCardsList = useSelector(state => state.cars.isEndOfCards);
  const cars = useSelector(state => state.cars.cars);
  const allCars = useSelector(state => state.cars.allCars);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState([]);
  const [filter, setFilter] = useState('');
  const [price, setPrice] = useState(10);
  const [mileage, setMileage] = useState(1000);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    dispatch(getCarsThunk({ page: pageNumber }));
  }, [dispatch, pageNumber]);

  useEffect(() => {
    if (filter) dispatch(getCarsThunk({ page: 1, limit: 32 }));
  }, [dispatch, filter]);

  const toggleModal = event => {
    setIsModalOpen(state => !state);

    setCurrentCar(
      cars.filter(car => car.id.toString() === event.currentTarget.id)
    );
  };

  const handleFormOnChange = event => {
    if (event.target.id === 'make') setFilter(event.target.value);
    if (event.target.id === 'price') setPrice(event.target.value);
    if (event.target.id === 'mileage') setMileage(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();

    setFilteredCars(
      allCars
        .filter(car => car.make === filter)
        .filter(car => parseInt(car.rentalPrice.replace('$', '')) <= price)
        .filter(car => car.mileage <= mileage)
    );
  };
  const resetForm = () => {
    setFilter('');
    setPrice(10);
    setMileage(1000);
    setFilteredCars([]);
  };
  console.log(filteredCars);
  const handleKeyDown = event => {
    if (event.key === 'Escape') setIsModalOpen(false);
  };
  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <form onChange={handleFormOnChange} onSubmit={handleSubmit}>
        <label>
          Car brand
          <select name="make" id="make" value={filter}>
            {makeList.map(make => (
              <option value={make}>{make}</option>
            ))}
          </select>
        </label>
        <label htmlFor="price">
          Price/1 hour
          <input
            type="number"
            step="10"
            min="10"
            max="1000"
            name="price"
            id="price"
            value={price}
          />
        </label>
        <label>
          Car mileage/km
          <input
            type="number"
            step="1000"
            min="1000"
            max="100000"
            name="mileage"
            id="mileage"
            value={mileage}
          />
        </label>
        <button type="submit">Search</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          listStyle: 'none',
        }}
      >
        <CarsItem
          cars={filteredCars?.length === 0 ? cars : filteredCars}
          toggleModal={toggleModal}
        />
      </ul>
      {CarsItem && !endOfCardsList && (
        <button type="button" onClick={() => setPageNumber(state => state + 1)}>
          Load more
        </button>
      )}
      {isModalOpen && (
        <Modal card={currentCar} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};
