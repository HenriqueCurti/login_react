import Input from '../input/Input'
import styles from './FormDefault.module.css'

function FormDefault(){
    return(<div className={styles.form_content}>
        <div className={styles.card}>
           <h1>Formulário</h1>
           <Input />
        </div>        
    </div>
    )
}

export default FormDefault