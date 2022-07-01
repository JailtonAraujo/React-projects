import { useState } from "react";
    const ListRender = ()=>{
        
        const [list] = useState(["joão","matheus", "caio"]);

    const [users,setUsers] = useState([
        {id:1, name:"jailton", age:23},
        {id:2, name:"hugo", age:30},
        {id:3, name:"carlos", age:35}
    ]);

        
        const deleteUserRamdon = () =>{
            const namberRandon = Math.floor(Math.random() * 4);
    
            setUsers((prevUsers)=>{
                return prevUsers.filter((user) => namberRandon !== user.id);
            });
        };

    return(
        <div>
            <div>
            <ul>
                {list.map((iten,i) =>(
                    <li key={i}>{iten}</li>
                ))}
            </ul>
            </div>
            <div>
                <ul>
                    {users.map((user)=>(
                        <li key={user.id}>{user.id} - {user.name} - {user.age}</li>
                    ))}
                    </ul>
                    <button onClick={deleteUserRamdon} >Delete user Random</button>
            </div>
        </div>
    )
}

export default ListRender;