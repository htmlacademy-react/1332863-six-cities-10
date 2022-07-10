type LocationProps = {
  locationName: string;
  isActive: boolean;
}

function LocationItem({locationName, isActive}: LocationProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="/#">
        <span>{locationName}</span>
      </a>
    </li>
  );
}

export default LocationItem;
