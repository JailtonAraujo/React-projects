import styles from "./Dashboard.module.css"

//hooks
import {useFetchDocuments} from '../../hooks/useFatchDocument.js'
import {useAuthValue} from '../../context/authContext.js'
import { useDeleteDocument } from "../../hooks/useDeleteDocument"

import { Link } from "react-router-dom"

const Dashboard = () => {

  const {user} = useAuthValue();
  const uid = user.uid;

  const { documets: posts,loading } = useFetchDocuments("posts",null,uid);

  const {deleteDocument} = useDeleteDocument("posts") 

 
  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.dashboard}>

      <h2>Dashboard</h2>
      <p>Generencie seus posts...</p>

      {posts && posts.length === 0 ? (

        <div className={styles.noposts}>
          <p> Voçê ainda não publicou nada...</p>
          <Link to="/posts/createpost" className="btn"> Criar Post! </Link>

        </div>

      ) : (
        <>

          <div className={styles.post_header}>
            <span>Titulo</span>
            <span>Ações</span>
          </div>

          {posts && posts.map((post)=>(
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>  

                <div>
                  <Link to={`/post/${post.id}`} className="btn btn-outline">
                    Ver
                  </Link>
                  <Link to={`/post/edit/${post.id}`} className="btn btn-outline">
                    Editar
                  </Link>
                  <button onClick={()=> deleteDocument(post.id)} className="btn btn-outline btn-danger">
                    Excluir
                  </button>
                </div>
              </div>
          ))}
        </>
      ) }


    </div>
  )
}

export default Dashboard