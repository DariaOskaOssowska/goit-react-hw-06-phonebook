import { combineReducers } from 'redux';

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

export const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        items: [...state.items, action.payload],
        filter: state.filter,
      };
    case 'contacts/deleteContact':
      return {
        items: [
          ...state.items.filter(contacts => contacts.id !== action.payload),
        ],
        filter: state.filter,
      };
    case 'filter/setFilter':
      return {
        items: state.items,
        filter: action.payload,
      };
    default:
      return state;
  }
};
