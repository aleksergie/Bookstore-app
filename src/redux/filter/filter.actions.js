import filterActionTypes from "./filter.types";

export const setFilter = (filter) => ({
  type: filterActionTypes.SET_FILTER,
  payload: filter,
});

export const setSearchQuery = (query) => ({
  type: filterActionTypes.SET_SEARCH_QUERY,
  payload: query,
});
