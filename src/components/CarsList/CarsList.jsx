import { CarsItem } from 'components/CarsItem/CarsItem';
import { Modal } from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/cars/thunks';

const { useEffect, useState } = require('react');

export const CarList = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();
  const endOfCardsList = useSelector(state => state.cars.isEndOfCards);
  const cars = useSelector(state => state.cars.cars);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState([]);

  useEffect(() => {
    dispatch(getCarsThunk(pageNumber));
  }, [dispatch, pageNumber]);
  const toggleModal = event => {
    setIsModalOpen(state => !state);

    setCurrentCar(
      cars.filter(car => car.id.toString() === event.currentTarget.id)
    );
  };
  const handleKeyDown = event => {
    if (event.key === 'Escape') setIsModalOpen(false);
  };
  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          listStyle: 'none',
        }}
      >
        <CarsItem toggleModal={toggleModal} />
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
