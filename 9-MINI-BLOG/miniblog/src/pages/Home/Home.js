//CSS
import styles from "./Home.module.css";

import {useNavigate, Link} from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFatchDocument";
import PostDetails from "../../components/PostDetails";

const Home = () => {

  const [query, setQuery] = useState("");
  const {documets: posts, loading} = useFetchDocuments("posts"); 

  const navigate = useNavigate();

  

  const handlerSubmit = (e) =>{
    e.preventDefault();

    if(query){
      return navigate(`/search?q=${query}`);
    }

  }

  return (
    <div className={styles.home}>
      <h2>Veja os nossos posts mais recentes</h2>
      <form onSubmit={handlerSubmit} className={styles.searc_form}>
        <input type="text" placeholder="Ou busque por tags..." onChange={(e) => setQuery(e.target.value)}/>
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p> }
        {posts && posts.map((post)=>(
          <PostDetails key={post.id} post={post}/>
        ))}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn"> 
                Criar primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home