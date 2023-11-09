import { RootLayout } from 'components/RootLayout/RootLayout';
import { Route, Routes } from 'react-router-dom';
import { AnotherRoute } from 'routes/AnotherRoute/AnotherRoute';
import { Home } from 'routes/Home/Home';

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
