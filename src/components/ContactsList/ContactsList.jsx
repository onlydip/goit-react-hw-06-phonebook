import  ContactsItem  from '../ContactsItem/index';
import { List } from './ContactsList.styled';
import { getFilteredContacts } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/actions';

export default function Contacts() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          deleteContact={() => dispatch(actions.delContact(id))}
          name={name}
          number={number}
        />
      ))}
    </List>
  );
}