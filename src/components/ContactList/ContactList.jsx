import css from './ContactList.module.css';

export const ContactList = ({ contacts, children, deleteContact }) => {
  return (
    <div className={css.contacts}>
      {children}
      <ul className={css.contactsList}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contactsSingle} key={id}>
            <p className={css.contactsName}>{name}</p>
            <p className={css.contactsNumber}> {number}</p>
            <button
              onClick={() => {
                deleteContact(id);
              }}
              className={css.contactsBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
