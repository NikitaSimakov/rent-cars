// import { useSelector } from 'react-redux';

export const AddToFavorite = id => {
  // const cars = useSelector(state => state.cars.cars);
  // const favoriteCar = cars.filter(car => car.id === id);
  return {
    type: 'favorite/addFavorite',
    payload: id,
  };
};

export const DeleteFromFavorite = id => {
  return {
    type: 'favorite/deleteFavorite',
    payload: id,
  };
};
