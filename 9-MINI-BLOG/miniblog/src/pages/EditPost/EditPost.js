import styles from './EditPost.module.css'

import {useState, useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom"
import { useAuthValue} from "../../context/authContext"
import { useFetchDocument } from '../../hooks/useFatchDocuments.js'
import { useUpdatetDocument } from '../../hooks/useUpdateDocument'

const EditPost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");
  const {user} = useAuthValue();
  
  const {id} = useParams();

  const {documet:post, loading} = useFetchDocument("posts",id);

  useEffect(()=>{

    if(post){
        setTitle(post.title);
        setImage(post.image);
        setBody(post.body);

        const textTags = post.tagsArray.join(", ");

        setTags(textTags);
    }

  },[post])
  
  const {updateDocument, response} = useUpdatetDocument("posts");
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

    const data = {
        title,
        body,
        tagsArray,
        image,
        uid: user.uid,
        createdBy: user.displayName
      }

      updateDocument(id,data)

    navigate("/dashboard");

  };

  if(loading){
    return <p>Carregando post...</p>
  }


  return (
    
    <div className={styles.edit_post}>
        
        {post && (
            <>

<h2>{`Editando post: ${post.title}`}</h2>
      <p>Altere os dados do seu post!</p>
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

        <p className={styles.preview_title} >Preview da imagem atual:</p>
        <img  className={styles.preview_img} src={post.image} alt={post.title} />

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

        {!response.loading &&  <button className="btn">Editar</button> }
         {response.loading &&  <button className="btn">Aguarde...</button>}
          {response.error && <p className='error'>{response.error}</p>}
          {formError && <p className='error'>{formError}</p>}
      </form>
            
            </>
        )}

    </div>

  )
}

export default EditPost