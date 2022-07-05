import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
  
    const {id} = useParams();
    const url = "http://localhost:3000/produts/"+id;

    const {data:product, httpConfig, loading, error } = useFetch(url);


    return (
   <>
    <p>Id do Produto: {id}</p>
    {error && <p>Ocorreu um erro!</p>}
    {loading && <p>Carregando...</p>}
    {product && (
        <div>
            <h1>{product.name}</h1>
            <p>R$: {product.price}</p>
            <Link to={`/product/${product.id}/info`}>Para mais informações</Link>    
        </div>
    )}
   </>
  )
}

export default Product