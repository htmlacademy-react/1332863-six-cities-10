import { useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/types';

function OfferList(props: { offers: Offer[] }): JSX.Element {
  const [hoveredOffer, setOffer] = useState<Offer | null>(null);

  const setHoveredOffer = (offer: Offer) => {
    setOffer(offer);
  };

  const temporaryFunction = () => hoveredOffer;
  temporaryFunction();

  return (
    <>
      {props.offers.map((offer) => (
        <OfferCard offer={offer} setHoveredOffer={setHoveredOffer} key={offer.id} />
      ))}
    </>
  );
}

export default OfferList;
