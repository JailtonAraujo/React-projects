import './MyForm.css'
import {useState} from 'react'

const MyForm = ({user}) => {

    const [name,setName] = useState(user ? user.name : "");
    const [email,setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "");
    const [role, setRole] = useState(user ? user.role : "");

    const handlerName = (e) =>{
        setName(e.target.value);
    }

    const hundlerSubmit = (event) =>{
        event.preventDefault();
        console.log(name);
        console.log(email)
        console.log(bio);
        console.log(role);

        setName("");
        setEmail("");
        setBio("");
    };

    //console.log(name);
    //console.log(email);

    return (
        <div>
            <form onSubmit={hundlerSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="digite seu nome" onChange={handlerName} value={name} />
                </div>
                 {/*Label envolvendo input*/}
                 <label>
                    <span>Email:</span>
                    <input type="email" name="email" placeholder="Digite o email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>

                <label>
                    <span>Bio:</span>
                    <textarea name="bio" onChange={(e) => setBio(e.target.value)} value={bio} ></textarea>
                </label>

                <label>
                    <span>Função</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="Junior">Junior</option>
                        <option value="Pleno">Pleno</option>
                        <option value="Senior">Sênior</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm;