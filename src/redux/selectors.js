export const getContacts = state => {
  return state.contacts.items;
};

export const getFilter = state => {
  return state.contacts.filter;
};