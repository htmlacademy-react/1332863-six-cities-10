import { useState, ChangeEvent, FormEvent } from 'react';
import ReviewRating from '../review-rating/review-rating';

const MAX_REVIEW_RATING = 5;
const MIN_REVIEW_RATING = 1;
const MIN_REVIEW_SIMBOLS = 50;
const MAX_REVIEW_SIMBOLS = 300;

function ReviewForm(): JSX.Element {
  const [formData, setformData] = useState({
    rating: '',
    review: '',
  });

  function isReviewLongEnough(): boolean {
    const reviewLength = formData.review.trim().length;
    return reviewLength >= MIN_REVIEW_SIMBOLS && reviewLength <= MAX_REVIEW_SIMBOLS;
  }

  function onSendReview(rating: string, review: string) {
    throw new Error('Function \'onSendReview\' isn\'t implemented.');
  }

  const formDataChangeHandler = ({ target }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;
    setformData({ ...formData, [name]: value });
  };


  const getReviewRating = () => {
    const reviewRating: JSX.Element[] = [];

    for (let i = MAX_REVIEW_RATING; i >= MIN_REVIEW_RATING; i--) {
      reviewRating.push(<ReviewRating starNumber={i} rating={formData.rating} ratingChangeHandler={formDataChangeHandler} key={`key-${i}`} />);
    }

    return reviewRating;
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onSendReview(formData.rating, formData.review);
        setformData({ rating: '', review: '' });
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">
				Your review
      </label>
      <div className="reviews__rating-form form__rating">{getReviewRating()}</div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={formDataChangeHandler}
        value={formData.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
					To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isReviewLongEnough() || !formData.rating}>
					Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
