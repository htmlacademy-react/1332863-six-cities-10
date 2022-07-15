import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/types';

function OfferList(props: {offers: Offer[]} & { classPrefix: string }): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {props.offers.map((offer) => (
        <OfferCard offer={offer} classPrefix={props.classPrefix} key={offer.id} />
      ))}
    </ul>
  );
}

export default OfferList;
