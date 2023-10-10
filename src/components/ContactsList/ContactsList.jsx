import ContactsItem from '../ContactsItem/index';
import { List } from './ContactsList.styled';
import { getFilteredContacts } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { delContact } from '../redux/reducer'; 

export default function Contacts() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          deleteContact={() => dispatch(delContact(id))} 
          name={name}
          number={number}
        />
      ))}
    </List>
  );
}
