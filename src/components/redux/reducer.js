
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;

      const existingContact = state.items.find(contact => contact.name.toLowerCase() === name.toLowerCase());

      if (existingContact) {
        alert('The contact is already in use!');
        return;
      }

      state.items.push({ id: nanoid(), name, number });
    },
    delContact: (state, action) => {
      const contactId = action.payload;

      state.items = state.items.filter(contact => contact.id !== contactId);
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, delContact, changeFilter } = phonebookSlice.actions;

export default phonebookSlice.reducer;
