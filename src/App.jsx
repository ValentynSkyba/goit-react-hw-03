import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ConactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import contactsData from "./common/contacts.json";

const App = () => {
  const [userContacts, setUserContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    if (savedContacts?.length) return savedContacts;
    return contactsData;
  });
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(userContacts));
  }, [userContacts]);

  const handleDelete = (id) => {
    setUserContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const getFilteredContacts = () => {
    return userContacts.filter((item) =>
      item.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  const addContact = (contact) => {
    console.log(contact);
    setUserContacts((prev) => [...prev, contact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchStr={searchStr} onSearch={setSearchStr} />
      <ContactList userContacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
