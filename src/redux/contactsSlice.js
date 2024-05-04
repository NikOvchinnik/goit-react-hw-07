import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";

const initialContactsState = {
  items: [],
  loading: false,
  error: null,
};

const isFulfilled = (action) =>
  typeof action.type === "string" && action.type.endsWith("/fulfilled");
const isPending = (action) =>
  typeof action.type === "string" && action.type.endsWith("/pending");
const isRejected = (action) =>
  typeof action.type === "string" && action.type.endsWith("/rejected");

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContactsState,
  extraReducers: (builder) => {
    builder
      .addMatcher(isFulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addMatcher(isPending, (state) => {
        state.loading = true;
        state.items = [];
        state.error = null;
      })
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const filtredContacts = contacts.filter( contact => {
      return contact.name.toLowerCase().includes(filter.trim().toLowerCase());
    });
    return filtredContacts;
  }
);

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
