import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  clickedFilmId: null,
  apiCallResults: null,
  filmStore: [],
  clickedYear: new Date().getFullYear(),
};

export const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    addSearchTerm: (state, action) => {
      //Used in AdminHeader and SearchBar
      state.searchTerm = action.payload;
    },
    addClickedFilmId: (state, action) => {
      //Used in TwoTile
      state.clickedFilmId = action.payload;
    },
    addApiCallResults: (state, action) => {
      //Used in AdminHeader
      state.apiCallResults = action.payload;
    },
    setFilmStore: (state, action) => {
      //Used in Home
      state.filmStore = action.payload;
    },
    setClickedYear: (state, action) => {
      //Used in YearPanel
      state.clickedYear = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addFilm,
  addSearchTerm,
  addClickedFilmId,
  addApiCallResults,
  setFilmStore,
  setClickedYear,
} = trackerSlice.actions;

export const selectFilmStore = (state) => state.tracker.filmStore;
export const selectSearchTerm = (state) => state.tracker.searchTerm;
export const selectClickedFilmId = (state) => state.tracker.clickedFilmId;
export const selectApiCallResults = (state) => state.tracker.apiCallResults;
export const selectRatingReviewStore = (state) =>
  state.tracker.ratingReviewStore;
export const selectClickedYear = (state) => state.tracker.clickedYear;

export default trackerSlice.reducer;
