import Contact from "../Contact/Contact";

const ContactList = ({ userContacts = [] }) => {
  if (!userContacts.length) return <h3>No data...</h3>;
  return (
    <ul>
      <h2>Contacts</h2>
      {userContacts.map((contact) => (
        <Contact item={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
