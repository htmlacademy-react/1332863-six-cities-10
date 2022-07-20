import LocationItem from '../../components/locations-item/locations-item';
import OfferList from '../../components/offer-list/offer-list';
import SiteHeader from '../../components/site-header/site-header';
import { Offer } from '../../types/types';

const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function MainPage(props: {offers: Offer[]}): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <SiteHeader isActive count={4} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((citi) => (
                <LocationItem locationName={citi} isActive={false} key={citi} />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{props.offers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
									Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>
										Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
										Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
										Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
										Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={props.offers}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
