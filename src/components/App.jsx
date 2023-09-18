import { Route, Routes } from 'react-router-dom';
import { CarList } from './CarsList/CarsList';
import { HomePage } from 'pages/Home/Home';
import { FavoritesPage } from 'pages/FavoritesPage/FavoritesPage';
import { Layout } from './Layout/Layout';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CarList />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
      {/* React homework template */}
    </div>
  );
};
