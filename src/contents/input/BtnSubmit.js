import styles from './BtnSubmit.module.css'

function BtnSubmit( { describe }){
    return(
        <div className={styles.btn_container}>
            <input type='submit' value={describe} />
        </div>
    )
}

export default BtnSubmit