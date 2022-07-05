import styles from './Register.module.css';

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Cria seu usuário e compartilhe suas historias</p>
        <form>
          <label>
            <span>Nome:</span>
            <input 
            type="text"
            name="displayname"
            placeholder="Nome do Usuario"
            required/>
          </label>

          <label>
            <span>E-mail:</span>
            <input type="email"
             name="email"
             required
             placeholder="Email do Usuairo"/>
             
          </label>

          <label>
            <span>Senha:</span>
            <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            />
          </label>

          <label>
            <span>Confirmação de senha:</span>
            <input
            type="password"
            name="confirmpassword"
            required
            placeholder="Confirme sua senha"
            />
          </label>
          <button className="btn">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register