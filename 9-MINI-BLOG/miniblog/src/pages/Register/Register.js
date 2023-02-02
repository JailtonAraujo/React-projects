import styles from './Register.module.css';

import {useState, useEffect} from "react";
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {

  const [displayName,setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");

  const {
    createUSer,
    error:authError,
    loading} = useAuthentication();

  const handlerSubmit = async (e) =>{
      e.preventDefault();

      setError("");

      const user={
        displayName,
        email,
        password,
      }

      if (password !== confirmpassword){
        setError("As senha precisan ser iguais!");
        return;
      }
      
      const res = await createUSer(user);

      console.log(res);

  }

  useEffect(() =>{
    if(authError){
      setError(authError);
    }
  },[authError])

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Cria seu usuário e compartilhe suas historias</p>
        <form onSubmit={handlerSubmit}>
          <label>
            <span>Nome:</span>
            <input 
            type="text"
            name="displayname"
            placeholder="Nome do Usuario"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required/>
          </label>

          <label>
            <span>E-mail:</span>
            <input 
             type="email"
             name="email"
             required
             placeholder="Email do Usuairo"
             value={email} 
             onChange={(e) => setEmail(e.target.value)}
             />
          </label>

          <label>
            <span>Senha:</span>
            <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label>
            <span>Confirmação de senha:</span>
            <input
            type="password"
            name="confirmpassword"
            required
            placeholder="Confirme sua senha"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </label>
         {!loading &&  <button className="btn">Cadastrar</button> }
         {loading &&  <button className="btn">Aguarde...</button>}
          {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Register