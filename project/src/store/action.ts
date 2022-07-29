import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/types';

export const changeCity = createAction('changeCity', (city) => ({
  payload: city
}));

export const changeSortType = createAction('changeSortType', (sortType) => ({
  payload: sortType
}));

export const loadOffers = createAction<Offer[]>('getHotels');
