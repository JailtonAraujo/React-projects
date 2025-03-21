import styles from "./CreatePost.module.css"

import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { useAuthValue} from "../../context/authContext"
import { useInsertDocument } from "../../hooks/useInsertDocument"

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");
  const {user} = useAuthValue();
  
  const {insertDocument, response} = useInsertDocument("posts")
  const navigate = useNavigate();

  const handlerSubmit = (e) =>{
    e.preventDefault();
    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma url valida")
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if(!title || !image || !tags || !body){
      setFormError("Por favor, preencha todos os campos")
    }

    if(formError) return;

    insertDocument({
      title,
      body,
      tagsArray,
      image,
      uid: user.uid,
      createdBy: user.displayName
    })

    navigate("/");

  };

  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre oque quiser e compartilhe seu conhecimento!</p>
      <form onSubmit={handlerSubmit}>
        
        <label>
          <span>Título:</span>
          <input 
          type="text" 
          name="title"
          required
          placeholder="Pense em um título!" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}/>
        </label>

        <label>
          <span>URL da imagem:</span>
          <input 
          type="text" 
          name="image"
          required
          placeholder="Insira uma imagem que represente o seu poster!"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label>
          <span>Conteudo:</span>
          <textarea 
          name="body"
          placeholder="Insira o conteudo do poster!"
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
          ></textarea>
        </label>

        <label>
          <span>Tags:</span>
          <input 
          type="text" 
          name="tags"
          required
          placeholder="Insir as tegs separadas por virgula!"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          />
        </label>

        {!response.loading &&  <button className="btn">Cadastrar</button> }
         {response.loading &&  <button className="btn">Aguarde...</button>}
          {response.error && <p className='error'>{response.error}</p>}
          {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  )
}

export default CreatePost