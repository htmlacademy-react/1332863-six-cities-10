import PlaceCard from '../../components/cities-card/place-card';
import SiteHeader from '../../components/site-header/site-header';
import { places } from '../../mock/places';

function Favorites(): JSX.Element {
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
                  {places.slice(0, 2).map((place) => (
                    <PlaceCard {...place} classPrefix='favorites__' key={place.id}/>
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
                  {places.slice(2, 3).map((place) => (
                    <PlaceCard {...place} classPrefix='favorites__' key={place.id}/>
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
