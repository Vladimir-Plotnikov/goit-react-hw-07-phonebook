import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { selectIsLoading, selectError } from 'redux/selector';
import { useSelector } from 'react-redux';

import './ContactForm/ContactForm.css';
import './Filter/Sorting.css'
import './ContactItem/ContactItem.css'

export function App() {
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  
return (
    <div className='GlobalClass'>
      <div>
        <h1 className='PhoneBook'>Phonebook</h1>
        <ContactForm />
      <Filter />
      {isLoading&&!error}
      <ContactList/>
      </div>
    </div>
  )

};


