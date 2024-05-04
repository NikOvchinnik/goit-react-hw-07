import style from "./Contact.module.css";
import { LiaAddressBook } from "react-icons/lia";
import { LiaPhoneSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact: { id, name, number }}) => {
  
  const dispath = useDispatch();

  return (
    <li className={style.contactItem}>
      <div className={style.contactContainer}>
        <div className={style.contactTextContainer}>
          <LiaAddressBook />
          <p>{name}</p>
        </div>
        <div className={style.contactTextContainer}>
          <LiaPhoneSolid />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={style.contactBtnDelete}
        type="button"
        onClick={() => dispath(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
