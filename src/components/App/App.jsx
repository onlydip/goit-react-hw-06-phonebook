
import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import ContactsList from 'components/ContactsList';
import ContactFilter from 'components/ContactFilter';
import { useSelector } from 'react-redux';
import { FirstTitle, SecondTitle,WithoutContacts } from './App.styled';

export default function App() {
const contacts = useSelector(state => state.contacts.items);
  
  return (
    <Section>
      <FirstTitle>Phonebook</FirstTitle>
      <Phonebook title="Phonebook" />
      <ContactFilter title="Find contacts by name:" />
      <SecondTitle>Contacts</SecondTitle>
      {contacts.length === 0 ? (
        <WithoutContacts>There are no contacts in your phonebook</WithoutContacts>
      ) : (
          <ContactsList title="Contacts" />
          )}
    </Section>
  );
}
