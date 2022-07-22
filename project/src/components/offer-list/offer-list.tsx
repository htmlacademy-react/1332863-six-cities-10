import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/types';

type OfferListProps = {
  offers: Offer[];
  onOfferCardHover: (hoveredOffer: Offer | null) => void;
  onOfferCardLeave: () => void;
}

function OfferList({ offers, onOfferCardHover, onOfferCardLeave }: OfferListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          onOfferCardHover={onOfferCardHover}
          onOfferCardLeave={onOfferCardLeave}
          key={offer.id}
        />
      ))}
    </>
  );
}

export default OfferList;
