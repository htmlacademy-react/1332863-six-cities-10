import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offer } from '../../types/types';

function App(props: {offers: Offer[]}): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<MainPage offers={props.offers} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage offers={props.offers} />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Offer} element={<OfferPage offers={props.offers} />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
