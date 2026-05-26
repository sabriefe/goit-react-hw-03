import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css.list}>
      {contacts.map((item) => (
        <Contact key={item.id} data={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ContactList;
