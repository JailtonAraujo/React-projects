import {useState} from 'react';

const MenageDate = () =>{

    let someDate = 10
    console.log(someDate);

    const [number, SetNumber ] = useState(15);

    return(
        <div>
               <div>
                    <p>{someDate}</p>
                    <button onClick={() =>{someDate = 15}} >mudar valor</button>
                </div> 
                <div>
                    <p>{number}</p>
                    <button onClick={() => SetNumber(20)} >Mudar Number</button>
                </div>
        </div>
    )
}

export default MenageDate;