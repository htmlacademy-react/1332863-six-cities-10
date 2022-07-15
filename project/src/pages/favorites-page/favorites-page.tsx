import OfferCard from '../../components/offer-card/offer-card';
import SiteHeader from '../../components/site-header/site-header';
import { Offer } from '../../types/types';

function FavoritesPage(props: {offers: Offer[]}): JSX.Element {
  return (
    <div className="page">
      <SiteHeader isActive count={3} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="\#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {props.offers.slice(0, 2).map((offer) => (
                    <OfferCard offer={offer} classPrefix="favorites__" key={offer.id} />
                  ))}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="\#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {props.offers.slice(2, 3).map((offer) => (
                    <OfferCard offer={offer} classPrefix="favorites__" key={offer.id} />
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
