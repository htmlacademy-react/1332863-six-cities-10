import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSortType } from '../../store/action';
import { AppDispatch, State } from '../../types/state';
import { SORT_TYPES } from '../../const';

function SortOffers(): JSX.Element {
  const [activeClass, setActiveClass] = useState<string>('');
  const currentSortType = useSelector<State>((store) => store.sortType);
  const dispatch = useDispatch<AppDispatch>();

  const toggleActiveClass = () => {
    if (activeClass) {
      setActiveClass('');
    } else {
      setActiveClass('places__options--opened');
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={toggleActiveClass} className="places__sorting-type" tabIndex={0}>
        {`${currentSortType}`}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${activeClass}`}>
        {SORT_TYPES.map((sortType) => (
          <li
            onClick={(evt) => dispatch(changeSortType(evt.currentTarget.textContent))}
            className={`places__option ${currentSortType === sortType ? 'places__option--active' : ''}`}
            key={sortType}
            tabIndex={0}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortOffers;
