import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  clickedFilmId: null,
  apiCallResults: null,
  filmStore: [],
  ratingReviewStore: [
    {
      id: 603,
      viewingDate: "2023-05-16",
      location: 1, //1 cinema, 0 home
      review: "This film was top.",
      rating: 10,
    },
    {
      id: 603,
      viewingDate: "2023-04-16",
      location: 1, //1 cinema, 0 home
      review: "This film was top banna.",
      rating: 4,
    },
  ],
};

export const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    addFilm: (state, action) => {
      state.filmStore = [...state.filmStore, action.payload];
    },
    addSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addClickedFilmId: (state, action) => {
      //Used in FileTile
      state.clickedFilmId = action.payload;
    },
    addApiCallResults: (state, action) => {
      state.apiCallResults = action.payload;
    },
    setFilmStore: (state, action) => {
      //Used in Home
      state.filmStore = action.payload;
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
} = trackerSlice.actions;

export const selectFilmStore = (state) => state.tracker.filmStore;
export const selectSearchTerm = (state) => state.tracker.searchTerm;
export const selectClickedFilmId = (state) => state.tracker.clickedFilmId;
export const selectApiCallResults = (state) => state.tracker.apiCallResults;
export const selectRatingReviewStore = (state) =>
  state.tracker.ratingReviewStore;

export default trackerSlice.reducer;
