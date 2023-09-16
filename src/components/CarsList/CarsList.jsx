import { CarsItem } from 'components/CarsItem/CarsItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsThunk } from 'redux/cars/thunks';

const { useEffect, useState } = require('react');

export const CarList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const endOfCardsList = useSelector(state => state.cars.isEndOfCards);
  useEffect(() => {
    dispatch(getCarsThunk(pageNumber));
  }, [dispatch, pageNumber]);
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <CarsItem />
      </ul>
      {CarsItem && !endOfCardsList && (
        <button type="button" onClick={() => setPageNumber(state => state + 1)}>
          Load more
        </button>
      )}
    </div>
  );
};
