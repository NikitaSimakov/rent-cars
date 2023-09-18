import { Link } from 'react-router-dom';
import css from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <div className={css.wrapper}>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};
