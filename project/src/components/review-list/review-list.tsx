import ReviewItem from '../review-item/review-item';
import { Review } from '../../types/types';


function ReviewList({ reviews }: { reviews: Review[] }): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem review={review} key={review.id} />
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
