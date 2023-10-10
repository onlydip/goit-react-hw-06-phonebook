import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');
const delContact = createAction('contacts/del');
const changeFilter = createAction('contacts/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { changeFilter, addContact, delContact };