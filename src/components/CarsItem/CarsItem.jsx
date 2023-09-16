import { AddToFavorite, DeleteFromFavorite } from 'redux/favorite/actions';
const { useSelector, useDispatch } = require('react-redux');

export const CarsItem = () => {
  const cars = useSelector(state => state.cars.cars);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite);

  return cars.map(
    ({ id, make, model, year, type, milage, img, rentalPrice }) => {
      return (
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
          </div>
          <button type="button" id={id}>
            Learn more
          </button>
        </li>
      );
    }
  );
};
