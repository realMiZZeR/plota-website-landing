import styles from './inputField.module.scss'

const InputField = ({ name, title, type = 'text', placeholder = '', isTextArea = false, onChange, value}) => {

  const handleChange = e => {
    onChange(prev => ({
       ...prev, 
       [name]: e.target.value
      }))
  }

  return (
    <label className={styles.wrapper} htmlFor={name}>
      {isTextArea 
      ? <textarea className={styles.textarea} onChange={onChange} placeholder={placeholder} value={value} />
      : <input className={styles.input} type={type} placeholder={placeholder} onChange={handleChange} value={value} /> }
      <span className={styles.title}>{ title }</span>
    </label>
  )
}

export default InputField;