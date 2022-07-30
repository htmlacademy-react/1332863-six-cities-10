import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortType, loadOffers, requireAuthorization } from './action';
import { SortType, AuthorizationStatus } from '../const';
import { InitialState } from '../types/types';


const initialState: InitialState = {
  city: 'Paris',
  allOffers: null,
  sortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
