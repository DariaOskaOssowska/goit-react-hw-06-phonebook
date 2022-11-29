import { addContact, delContact, setFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

export const contactsReducer = createReducer(initialState.contacts, {
  [addContact]: (state, action) => {
    state.items.push(action.payload);
  },
  [delContact]: (state, action) => {
    const index = state.items.findIndex(
      contacts => contacts.id === action.payload
    );
    state.items.splice(index, 1);
  },
  [setFilter]: (state, action) => {
    state.filter = action.payload;
  },
});