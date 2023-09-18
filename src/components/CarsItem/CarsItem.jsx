import { AddToFavorite, DeleteFromFavorite } from 'redux/favorite/actions';
import css from './CarsItem.module.css';
import { BiHeart } from 'react-icons/bi';
const { useSelector, useDispatch } = require('react-redux');

export const CarsItem = ({ toggleModal, cars }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite);

  return cars.map(car => {
    const { id, make, model, year, type, mileage, img, rentalPrice } = car;
    return (
      <li className={css.listItem} key={id}>
        <div key={id} className={css.imgWrapper}>
          <img className={css.img} alt={model} src={img} width="274px" />
          {favorites && favorites?.includes(id) ? (
            <button
              type="button"
              id={id}
              className={css.favoriteButton}
              onClick={() => dispatch(DeleteFromFavorite(id))}
            >
              <BiHeart width="16px" fill="red" />
            </button>
          ) : (
            <button
              type="button"
              id={id}
              className={css.favoriteButton}
              onClick={() => dispatch(AddToFavorite(id))}
            >
              <BiHeart width="16px" fill="blue" />
            </button>
          )}
        </div>
        <div className={css.mainTextWrapper}>
          <p className={css.make}>{make}</p>
          <p className={css.model}>{model},</p>
          <p className={css.year}>{year}</p>
          <p className={css.price}>{rentalPrice}</p>
        </div>
        <div className={css.secondaryTextWrapper}>
          <p className={css.type}>{type}</p>
          <p className={css.mileage}>{mileage}</p>
        </div>
        <button
          className={css.learnMoreBtn}
          type="button"
          id={id}
          onClick={toggleModal}
        >
          Learn more
        </button>
      </li>
    );
  });
};
