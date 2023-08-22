import BtnSubmit from '../input/BtnSubmit'
import Input from '../input/Input'
import styles from './FormDefault.module.css'
import { useState } from 'react'



function FormDefault( { title } ){

    const [nome, setNome]               = useState();
    const [email, setEmail]             = useState();
    const [pass, setPass]               = useState();
    const [confirmPass, setconfirmPass] = useState();

    return(<div className={styles.form_content}>       

        <form onSubmit={Cadastrar} className={styles.card}>
           <h1 className={styles.titulo}>{title}</h1>
           <Input type='text' 
                  nome='nome' 
                  text='Nome' 
                  placeholder='Digite seu nome'
                  setValue={setNome} />
           <Input type='email' 
                  nome='email' 
                  text='E-mail' 
                  placeholder='Digite seu email'
                  setValue={setEmail} />
           <Input type='password' 
                  nome='senha' 
                  text='Senha' 
                  placeholder='Digite uma senha'
                  setValue={setPass} />
           <Input type='password' 
                  nome='confirmSenha' 
                  text='Confirmação da senha' 
                  placeholder='Digite a senha Novamente'
                  setValue={setconfirmPass} />                  
            
           <BtnSubmit describe='CADASTRAR' />
        </form>        
    </div>
    )

    function Cadastrar(e){
        e.preventDefault()
        console.log(nome, email, pass, confirmPass)

        let dados = [{
            "nome":nome,
            "email":email,
            "password":pass,
            "confirmpassword":confirmPass
        }]

        console.log(dados)
    }
}




export default FormDefault