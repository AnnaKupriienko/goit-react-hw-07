import { useSelector } from "react-redux";
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    console.log(filteredContacts);
    return (
        <ul>
                {filteredContacts.map(contact =>
                    <li className={css.list} key={contact.id}>
                        <Contact contact={contact} />
                    </li>  )
         }
            </ul>
            )}