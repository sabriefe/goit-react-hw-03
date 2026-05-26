import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ data, onDelete }) => {
  return (
    <div className={css.item}>
      <div className={css.subCon}>
        <p>
          <FaUser className={css.icon} size="12" />
          {data.name}
        </p>

        <p>
          <FaPhone className={css.icon} size="12" />
          {data.number}
        </p>
      </div>

      <button type="button" onClick={() => onDelete(data.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
