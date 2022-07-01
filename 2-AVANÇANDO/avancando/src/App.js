import { useState } from 'react';
import './App.css';
import Walpaper2 from './assets/image_2.jpg'
import CarDetails from './components/CarDatails';
import ChengeMessage from './components/ChangeMessage';
import ConditionalRedner from './components/ConditionalRander';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragments from './components/Fragments';
import ListRender from './components/LIstRender';
import MenageDate from './components/ManageDate';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';

function App() {
  //const nameUSer = "jailton";
  const [user] = useState("João");

  const [cars] = useState([
    {brand:"Fiat", km:0, color:"Geen", newCar:true},
    {brand:"Chavrolet", km:1050, color:"Red", newCar:false},
    {brand:"Wolksvagem", km:1000, color:"Black", newCar:true}
  ]);

  function eventPai(){
    console.log("evento do pai");
  }

  const [message, setMessage] = useState("");

  const handlerMessage = (msg) =>{
    setMessage(msg);
  }

  return (
    <div className="App">
      <h2>avançando em React</h2>
      {/*Imagens em publics*/}
      {/*Imagem em src*/}
      <img src={Walpaper2} alt="Walpaper2" />

      <MenageDate />
      <ListRender />

      <ConditionalRedner />

      <ShowUserName name={user} />

      <CarDetails brand="Fiat" km={1000} color="Geen" newCar={false}  />

      {cars.map((car)=>(
        <CarDetails brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
      ))}

      <Fragments/>

      <Container>
          <p>Sub conteudo</p>
      </Container>

      <ExecuteFunction myFunction={eventPai} />

      <Message message={message}/>

      <ChengeMessage handlerMessage={handlerMessage}/>

    </div>
  );
}

export default App;
