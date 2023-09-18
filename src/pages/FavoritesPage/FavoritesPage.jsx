import { CarsItem } from 'components/CarsItem/CarsItem';
import { Modal } from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/cars/thunks';
import css from './FavoritesPage.module.css';
const { useEffect, useState } = require('react');

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.cars);
  const favorites = useSelector(state => state.favorite);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState([]);

  useEffect(() => {
    dispatch(getCarsThunk({ page: 1, limit: 32 }));
  }, [dispatch]);

  const toggleModal = event => {
    setIsModalOpen(state => !state);

    setCurrentCar(
      cars.filter(car => car.id.toString() === event.currentTarget.id)
    );
  };
  const handleKeyDown = event => {
    if (event.key === 'Escape') setIsModalOpen(false);
  };
  const favoriteCars = cars.filter(car => favorites.includes(car.id));
  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <ul className={css.list}>
        <CarsItem cars={favoriteCars} toggleModal={toggleModal} />
      </ul>
      {isModalOpen && (
        <Modal card={currentCar} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};
