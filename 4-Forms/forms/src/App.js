

import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>FORMS</h2>
      <MyForm user={{name:"jailton",email:"reidelas",bio:"Sou um programador", role:"Senior"}}/>
    </div>
  );
}

export default App;
