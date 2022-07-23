import OfferCard from '../offer-card/offer-card';
import { Offer, OfferViewType } from '../../types/types';

type OfferListProps = {
  offers: Offer[];
  offerViewType?: string;
  onOfferCardHover?: (hoveredOffer: Offer | null) => void;
  onOfferCardLeave?: () => void;
}

function OfferList({ offers, offerViewType, onOfferCardHover, onOfferCardLeave }: OfferListProps): JSX.Element {
  const getComponentByType = (type: string | undefined, offer: Offer) => {
    switch (type) {
      case OfferViewType.NEAR_PLACE:
        return (
          <OfferCard
            offer={offer}
            classPrefix={offerViewType}
            onOfferCardHover={onOfferCardHover}
            onOfferCardLeave={onOfferCardLeave}
            key={offer.id}
          />
        );
      case OfferViewType.FAVORITES:
        return (
          <OfferCard
            offer={offer}
            classPrefix={offerViewType}
            onOfferCardHover={onOfferCardHover}
            onOfferCardLeave={onOfferCardLeave}
            key={offer.id}
          />
        );
      default:
        return (
          <OfferCard
            offer={offer}
            classPrefix={offerViewType}
            onOfferCardHover={onOfferCardHover}
            onOfferCardLeave={onOfferCardLeave}
            key={offer.id}
          />
        );
    }
  };

  return (
    <>
      {offers.map((offer) => (
        getComponentByType(offerViewType, offer)
      ))}
    </>
  );
}

export default OfferList;
