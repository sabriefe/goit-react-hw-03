import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useState, useEffect } from "react";
import initialContact from "./contact.json";

function App() {
  const [contact, setContact] = useState(() => {
    const data = window.localStorage.getItem("contact-data");

    if (data) {
      return JSON.parse(data);
    }

    return initialContact;
  });

  const [search, setSearch] = useState("");

  const addContact = (newContact) => {
    setContact((prev) => [...prev, newContact]);
  };

  const deleteContact = (contactId) => {
    setContact((prev) => prev.filter((item) => item.id !== contactId));
  };

  const filteredContacts = contact.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    window.localStorage.setItem("contact-data", JSON.stringify(contact));
  }, [contact]);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onSubmit={addContact} />

      <SearchBox value={search} onSearch={setSearch} />

      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
