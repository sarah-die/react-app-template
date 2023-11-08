import { Route, Routes } from 'react-router-dom';
import { RootLayout } from '../components/RootLayout/RootLayout';
import { Home } from './Home/Home';
import { AnotherRoute } from './AnotherRoute/AnotherRoute';

export const Root = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/anotherRoute' element={<AnotherRoute />} />
      </Route>
    </Routes>
  );
};
