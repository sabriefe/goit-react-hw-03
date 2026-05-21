import css from "./ContactList.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <div className={css.list}>
        {contacts.map((val) => (
          <div className={css.item} key={val.id}>
            <div className={css.subCon}>
              <p>
                <FaUser className={css.icon} size="12" />
                {val.name}
              </p>
              <p>
                <FaPhone className={css.icon} size="12" />
                {val.phone}
              </p>
            </div>
            <button type="button" onClick={() => onDelete(val.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactList;
