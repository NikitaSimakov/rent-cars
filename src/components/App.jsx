import { Route, Routes } from 'react-router-dom';
import { CarList } from './CarsList/CarsList';
import { HomePage } from 'pages/Home/Home';
import { FavoritesPage } from 'pages/FavoritesPage/FavoritesPage';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
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
