import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortType } from './action';
import { offers } from '../mocks/offers';
import { SortType } from '../const';

const initialState = {
  city: 'Paris',
  allOffers: offers,
  sortType: SortType.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export { reducer };
