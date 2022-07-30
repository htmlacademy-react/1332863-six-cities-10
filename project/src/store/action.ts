import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/types';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction('changeCity', (city) => ({
  payload: city
}));

export const changeSortType = createAction('changeSortType', (sortType) => ({
  payload: sortType
}));

export const loadOffers = createAction<Offer[]>('getHotels');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setError = createAction<string | null>('setError');
