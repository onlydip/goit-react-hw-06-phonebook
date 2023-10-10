import { MdPhone } from 'react-icons/md';
import {
  ListItem,
  ItemName,
  ItemNumber,
  DeleteButton,
} from './ContactsItem.styled';

export default function ContactsItem({ deleteContact, name, number }) {
  return (
    <ListItem>
      <ItemName>
        <MdPhone size="20" />
        {name}:
      </ItemName>
      <ItemNumber>{number}</ItemNumber>
      <DeleteButton onClick={deleteContact}>Delete</DeleteButton>
    </ListItem>
  );
}
