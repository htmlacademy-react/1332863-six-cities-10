import { useState, ChangeEvent } from 'react';
import ReviewRating from '../review-rating/review-rating';

const MAX_REVIEW_RATING = 5;
const MIN_REVIEW_RATING = 1;

function ReviewForm():JSX.Element {
  const [formState, setFormState] = useState({
    rating: 0,
    review: ''
  }
  );

  const formStateChangeHandler = ({target}: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = target;
    setFormState({...formState, [name]: value});
  };

  const getReviewRating = () => {
    const reviewRating:JSX.Element[] = [];

    for (let i = MAX_REVIEW_RATING; i >= MIN_REVIEW_RATING; i--) {
      reviewRating.push(<ReviewRating count={i} ratingChangeHandler={formStateChangeHandler} key={i} />);
    }

    return reviewRating;
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {getReviewRating()}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={formStateChangeHandler}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
