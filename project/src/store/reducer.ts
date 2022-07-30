import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortType, loadOffers, setAuthorizationStatus, setDataLoadedStatus, setError } from './action';
import { SortType, AuthorizationStatus } from '../const';
import { InitialState } from '../types/types';


const initialState: InitialState = {
  city: 'Paris',
  allOffers: null,
  sortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: false
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
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
