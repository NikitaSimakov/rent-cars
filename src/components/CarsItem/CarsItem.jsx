import { AddToFavorite, DeleteFromFavorite } from 'redux/favorite/actions';
const { useSelector, useDispatch } = require('react-redux');

export const CarsItem = ({ toggleModal, cars }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite);

  return cars.map(car => {
    const { id, make, model, year, type, mileage, img, rentalPrice } = car;
    return (
      <li key={id}>
        <div key={id}>
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
    );
  });
};
