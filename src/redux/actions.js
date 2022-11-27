import { nanoid } from 'nanoid';

export const addContact = (nameText, numberText) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: nameText,
      number: numberText
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};
