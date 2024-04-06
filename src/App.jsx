import { useState } from "react";
import "./App.css";
import ContactList from "./components/ConactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import contactsData from "./common/contacts.json";

const App = () => {
  const [userContacts, setUserContacts] = useState(contactsData);
  console.log(userContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList userContacts={userContacts} />
    </div>
  );
};

export default App;
