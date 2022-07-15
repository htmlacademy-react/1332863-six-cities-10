import { Offer } from '../../types/types';

function OfferCard(props: {offer: Offer} & { classPrefix: string }): JSX.Element {
  const { offer: {isPremium, previewImage, price, rating, description, type}, classPrefix } = props;
  const shortDescription = description
    .split(' ')
    .slice(0, 7)
    .join(' ')
    .replace(/(\.|,)$/, '');

  return (
    <article className={`${classPrefix}card place-card`}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${classPrefix}image-wrapper place-card__image-wrapper`}>
        <a href="\#">
          <img
            className="place-card__image"
            src={previewImage}
            width={classPrefix === 'favorites__' ? '150' : '260'}
            height={classPrefix === 'favorites__' ? '110' : '200'}
            alt="Place"
          />
        </a>
      </div>
      <div className={`${classPrefix === 'favorites__' ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${classPrefix === 'favorites__' ? 'place-card__bookmark-button--active' : ''} place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="\#">{shortDescription}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
