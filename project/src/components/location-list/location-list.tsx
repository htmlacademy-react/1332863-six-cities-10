import { useSelector } from 'react-redux';
import LocationItem from '../location-item/location-item';
import { CITIES } from '../../const';
import { State } from '../../types/state';

function LocationList(): JSX.Element {
  const cityName = useSelector<State>((store) => store.city);

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <LocationItem locationName={city} isActive={city === cityName} key={city} />
      ))}
    </ul>
  );
}

export default LocationList;
