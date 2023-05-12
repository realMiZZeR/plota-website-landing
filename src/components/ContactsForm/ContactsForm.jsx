import { useState } from 'react';
import InputField from '../InputField/InputField';
import styles from './contactsForm.module.scss'

const ContactsForm = () => {

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    message: ''
  })

  return (
    <form className={styles.wrapper} method='POST' action=''>
      <div className={styles.group}>
        <InputField 
          name={"firstName"}
          title={"First Name"}
          onChange={setFormValues}
          value={formValues.firstName}
        />
        <InputField 
          name={"lastName"}
          title={"Last Name"}
          onChange={setFormValues}
          value={formValues.lastName}
        />
      </div>
        <InputField 
          name={"email"}
          title={"E-mail"}
          type='email'
          onChange={setFormValues}
          value={formValues.email}
        />
        <InputField 
          name={"phone"}
          title={"Phone"}
          onChange={setFormValues}
          value={formValues.phone}
        />
        <InputField 
          name={"companyName"}
          title={"Company Name"}
          onChange={setFormValues}
          value={formValues.companyName}
        />
        <InputField 
          name={"message"}
          title={"Message"}
          onChange={setFormValues}
          value={formValues.message}
          isTextArea={true}
        />
        <button className={styles.button} type='submit'>Send message</button>
    </form>
  )
}

export default ContactsForm;