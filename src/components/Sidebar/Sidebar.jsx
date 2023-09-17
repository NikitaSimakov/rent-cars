import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};
