import { Review } from '../types/types';

export const reviews: Review[] = [
  {
    id: 1,
    user: {
      id: 13,
      isPro: false,
      name: 'Zak',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/4.jpg'
    },
    rating: 3,
    comment: 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2022-07-02T12:25:36.939Z'
  },
  {
    id: 2,
    user: {
      id: 13,
      isPro: false,
      name: 'Jack',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/2.jpg'
    },
    rating: 5,
    comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2022-05-02T12:25:36.939Z'
  },
  {
    id: 3,
    user: {
      id: 15,
      isPro: false,
      name: 'Kendall',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/6.jpg'
    },
    rating: 4,
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2022-06-02T12:25:36.939Z'
  }
];
