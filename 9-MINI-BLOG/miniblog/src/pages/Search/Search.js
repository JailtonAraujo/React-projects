import styles from "./Search.module.css"

//hooks
import { useQuery } from "../../hooks/useQuery"
import { useFetchDocuments } from "../../hooks/useFatchDocument"
import PostDetails from "../../components/PostDetails";
import { Link } from "react-router-dom";

const Search = () => {

    const query = useQuery();

    const search = query.get("q");

    const {documets: posts} = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>

    <h2>Search</h2>
    
        <div>

            {posts && posts.length === 0 && (
                <div className={styles.no_posts}>
                    <p>Não foram encontrados posts apartir da sua busca...</p>
                    <Link to="/" className="btn btn-dark">Voltar</Link>
                </div>
            )}

            { posts && posts.map((post)=> <PostDetails key={post.id} post={post}/> ) }

        </div>

    </div>
  )
}

export default Search