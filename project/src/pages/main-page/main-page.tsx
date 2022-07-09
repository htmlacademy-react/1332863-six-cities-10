import LocationItem from '../../components/locations-item/locations-item';
import PlaceCard from '../../components/place-card/place-card';

type Places = {
  id: number,
  isPremium: boolean;
  price: number;
  rating: number;
  description: string;
  housingType: string;
};

const cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

const places: Places[] = [
  {
    id: 324123423,
    isPremium: true,
    price: 120,
    rating: 60,
    description: 'Beautiful &amp; luxurious apartment at great location',
    housingType: 'Apartment'
  },
  {
    id: 99324034,
    isPremium: false,
    price: 260,
    rating: 100,
    description: 'Wood and stone place',
    housingType: 'Private room'
  },
  {
    id: 90432422434,
    isPremium: true,
    price: 80,
    rating: 100,
    description: 'Canal View Prinsengracht',
    housingType: 'Apartment'
  },
  {
    id: 1234090094,
    isPremium: false,
    price: 100,
    rating: 80,
    description: 'Wood and stone place',
    housingType: 'Private room'
  },
  {
    id: 8433223434231,
    isPremium: false,
    price: 220,
    rating: 40,
    description: 'Nice, cozy, warm big bed apartment',
    housingType: 'Apartment'
  },
];

function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href="\#">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="\#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="\#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((citi) => <LocationItem locationName={citi} isActive key={citi}/>)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {places.map((place) => <PlaceCard {...place} key={place.id}/>)}
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
