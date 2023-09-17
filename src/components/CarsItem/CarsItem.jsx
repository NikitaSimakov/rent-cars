// import { Modal } from 'components/Modal/Modal';
// import { useState } from 'react';
import { AddToFavorite, DeleteFromFavorite } from 'redux/favorite/actions';
const { useSelector, useDispatch } = require('react-redux');

export const CarsItem = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.cars);
  const favorites = useSelector(state => state.favorite);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentCar, setCurrentCar] = useState([]);
  // const toggleModal = event => {
  //   setIsModalOpen(state => !state);

  //   setCurrentCar(
  //     cars.filter(car => car.id.toString() === event.currentTarget.id)
  //   );
  // };

  return cars.map(car => {
    const { id, make, model, year, type, mileage, img, rentalPrice } = car;
    return (
      <>
        <li key={id}>
          <div>
            <img alt={model} src={img} width="274px" />
            {favorites && favorites?.includes(id) ? (
              <button
                type="button"
                id={id}
                onClick={() => dispatch(DeleteFromFavorite(id))}
              >
                delete
              </button>
            ) : (
              <button
                type="button"
                id={id}
                onClick={() => dispatch(AddToFavorite(id))}
              >
                add
              </button>
            )}
          </div>
          <div
            style={{
              display: 'flex',
            }}
          >
            <p>{make}</p>
            <p>{model},</p>
            <p>{year}</p>
            <p>{rentalPrice}</p>
            <p>{type}</p>
            <p>{mileage}</p>
          </div>
          <button type="button" id={id} onClick={toggleModal}>
            Learn more
          </button>
        </li>
        {/* {isModalOpen && <Modal card={currentCar} id={id} />} */}
      </>
    );
  });
};
