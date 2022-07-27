import { useState } from 'react';
import { useSelector } from 'react-redux';
import SiteHeader from '../../components/site-header/site-header';
import LocationList from '../../components/location-list/location-list';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import { Offer, Point } from '../../types/types';
import { State } from '../../types/state';

function MainPage(): JSX.Element {
  const cityName = useSelector<State>((store) => store.city);
  const allOffers = useSelector<State, Offer[]>((store) => store.allOffers);
  const cityOffers = allOffers.filter((offer) => offer.city.name === cityName);
  const currentCity = cityOffers[0].city;
  const points = cityOffers.map((offer) => offer.location);

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(undefined);

  const handleOfferCardHover = (hoveredOffer: Offer | null) => {
    const currentOffer = cityOffers.find((offer) =>
      offer.id === hoveredOffer?.id,
    );
    setSelectedPoint(currentOffer?.location);
  };

  const handleOfferCardLeave = () => {
    setSelectedPoint(undefined);
  };

  return (
    <div className="page page--gray page--main">
      <SiteHeader isActive count={4} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${cityOffers.length} places to stay in ${cityName}`}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
									Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom ">
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
                <OfferList
                  offers={cityOffers}
                  classPrefix={'cities'}
                  onOfferCardHover={handleOfferCardHover}
                  onOfferCardLeave={handleOfferCardLeave}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  currentCity={currentCity}
                  points={points}
                  selectedPoint={selectedPoint}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
