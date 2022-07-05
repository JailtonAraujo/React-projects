import './App.css';
import {useEffect, useState} from 'react';

import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/produts";

function App() {

const [produts, setProduts] = useState([]);
const [name, setName] = useState("");
const [price, setPrice] = useState("");

const {data:itens, httpConfig, loading, error} = useFetch(url);



/*
 useEffect(  () =>{

  async function fetchData(){
    const res = await fetch(url);

    const data = await res.json();

    setProduts(data);
  }

  fetchData();

},[]);
*/

const createSubmit = async (e) =>{
  e.preventDefault();
  const product ={
    name,
    price
  }; 

  /*
  const resp = await fetch(url,{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(product)
  });

  const addedProduct = await resp.json();

  setProduts((prevProduts) => [...prevProduts, addedProduct]);
*/

  httpConfig(product, "POST");
  setName("");
  setPrice("");
}

  return (
    <div className="App">
      <h1>Produtos</h1>
      {!loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!loading && <ul>
        {itens && itens.map((produt) =>(
          <li key={produt.id}> {produt.name} - {produt.price}</li>
        ))}
      </ul>}

      <form onSubmit={createSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>

        <label>
          <span>Preço:</span>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </label>

        {!loading && <input type="submit" value="Salvar"/>}
        {loading && <input type="submit" disabled value="Aguarde"/>}
      </form>
    </div>
  );
}

export default App;
