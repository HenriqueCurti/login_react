import styles from './Input.module.css'

function Input({ text, nome, type, placeholder, value, setValue}){
    return(
        <div className={styles.input_container}>
            <label htmlFor={nome}> {text} </label>
            <input type={type} 
                   name={nome} 
                   placeholder={placeholder} 
                   id='campo'
                   onChange={UpdateStatus} /> 
                   
        </div>
    )
    function UpdateStatus(e){
      setValue(e.target.value)
    }
}



export default Input