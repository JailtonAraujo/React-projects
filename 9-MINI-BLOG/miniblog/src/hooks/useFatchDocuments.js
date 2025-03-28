import { useState, useEffect } from "react";
import {db} from "../firebase/config"
import{
    doc,
    getDoc
} from "firebase/firestore";

export const useFetchDocument = (docColledction, id) => {
    const [documet, setDocument] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(()=>{

        async function loadDocument(){
            if(cancelled){
                return;
            } 

            setLoading(true)

            
            try {
                

                    const docRef = await doc( db, docColledction, id );

                    const docSnap = await getDoc(docRef);

                    setDocument(docSnap.data());

                    setLoading(false);

            } catch (error) {
                console.log(error)
                setError(error)
                setLoading(false)
                
            }


            }
        loadDocument();
    },[docColledction,id, cancelled]);

    useEffect(()=>{
       return() => setCancelled(true);
    },[])

    return {documet, loading, error};
};