import { collection, getDocs } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { db } from "../../firebase-config";

export const dataContext = createContext();

const Context = ( props ) => {

    const [noteData,setNoteData] = useState([])
    const dataCollectionRef = collection(db,'notekeep')
    useEffect(()=>{
          const getData = async ()=>{
            const data = await getDocs(dataCollectionRef)
            setNoteData(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
          }

          getData()
    },[noteData])
  return <dataContext.Provider value={[noteData,setNoteData]}>{props.children}</dataContext.Provider>;
};

export default Context;
