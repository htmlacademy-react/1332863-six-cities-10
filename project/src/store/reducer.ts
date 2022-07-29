import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortType, loadOffers } from './action';
import { InitialState } from '../types/types';
import { SortType } from '../const';


const initialState: InitialState = {
  city: 'Paris',
  allOffers: null,
  sortType: SortType.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.allOffers = action.payload;
    });
});

export { reducer };
