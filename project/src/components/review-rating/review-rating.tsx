const RATING_TITLE: string[] = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

type ReviewRatingProps = {
  count: number;
  ratingChangeHandler: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

function ReviewRating(props: ReviewRatingProps):JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={props.count} id={`${props.count}-stars`} type="radio" onChange={props.ratingChangeHandler} />
      <label htmlFor={`${props.count}-stars`} className="reviews__rating-label form__rating-label" title={RATING_TITLE[props.count - 1]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default ReviewRating;
