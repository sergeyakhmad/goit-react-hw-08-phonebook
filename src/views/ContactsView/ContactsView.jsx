import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import s from './ContactsView.module.scss';

const ContactsView = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>PhoneBook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsView;
