import { useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/types';

function OfferList(props: {offers: Offer[]}): JSX.Element {
  const [, setHoveredCard] = useState<Offer | null>(null);

  const getHoveredCard = (offer: Offer) => {
    setHoveredCard(offer);
  };

  return (
    <>
      {props.offers.map((offer) => (
        <OfferCard offer={offer} getHoveredCard={getHoveredCard} key={offer.id} />
      ))}
    </>
  );
}

export default OfferList;
