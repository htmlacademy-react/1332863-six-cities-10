import { Offer } from '../../types/types';
import { Link } from 'react-router-dom';

function FavoritesCard(props: Offer): JSX.Element {
  const {isFavorite, isPremium, previewImage, price, rating, description, type, id} = props;

  const shortDescription = description
    .split(' ')
    .slice(0, 7)
    .join(' ')
    .replace(/(\.|,)$/, '');

  return (
    <article className='favorites__card place-card'>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className='favorites__image-wrapper place-card__image-wrapper'>
        <Link to={`/offer/${String(id)}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width='260'
            height='200'
            alt="Place"
          />
        </Link>
      </div>
      <div className='favorites__card-info place-card__info'>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
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
          <Link to={`/offer/${String(id)}`}>{shortDescription}</Link>
        </h2>
        <p className="place-card__type">{type[0].toUpperCase() + type.substring(1)}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
