import css from './Home.module.css';

export const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>
        Better journeys,
        <br />
        by Rental
      </h1>
    </div>
  );
};
