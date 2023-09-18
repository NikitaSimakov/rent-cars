import css from './Home.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const HomePage = () => {
  return (
    <div className={css.wrapper}>
      {' '}
      <div className={css.titleWrapper}>
        <h1 className={css.title}>
          Better journeys,
          <br />
          by Rental
        </h1>
      </div>
      <div className={css.benefits}>
        <ul className={css.benefitsList}>
          <li>
            Manage your booking <AiOutlineArrowRight />
          </li>
          <li>
            Retrieve in invoice <AiOutlineArrowRight />
          </li>
          <li>
            Find an answer <AiOutlineArrowRight />
          </li>
        </ul>
      </div>
    </div>
  );
};
