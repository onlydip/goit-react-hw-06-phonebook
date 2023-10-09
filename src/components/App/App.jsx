
import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import ContactsList from 'components/ContactsList';
import ContactFilter from 'components/ContactFilter';



export default function App() {
  return (
    <Section>
      <h1>Phonebook</h1>
      <Phonebook title="Phonebook" />
      <ContactFilter title="Find contacts by name:" />
      <h2>Contacts</h2>
      <ContactsList title="Contacts" />
    </Section>
  );
}
