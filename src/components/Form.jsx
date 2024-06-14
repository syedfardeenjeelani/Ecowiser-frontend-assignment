
import React, { useContext, useRef, useState } from 'react'
import { dataContext } from '../utils/Context'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase-config'

const Form = () => {
    const [noteData, setNoteData] = useContext(dataContext)
    const [show, setShow] = useState(false)
    const createNoteFormRef = useRef(null)
  

    
    const handleVisibility = (event) =>{
        setShow(true)
        // console.log(event.target)
    }
    window.addEventListener('click',(e)=>{
        if(
            !createNoteFormRef.current.contains(e.target)){
             setShow(false)
            //  console.log(e.target,createNoteFormRef.current)
        }
    })
    
    const handleSubmit =  async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get("noteTitle");
        const tagline = formData.get("noteTagline");
        const content = formData.get("noteContent");
        // console.log(title, tagline, content);
        setShow(false);
        try {
          const docRef = await addDoc(collection(db, "notekeep"), {
            title,
            tagline,
            content,
          });
        //   console.log(docRef.id);
          event.target.reset();
          setShow(false);
        } catch (error) {
          console.error("Error adding note: ", error);
        }
        
    
      };
  return (
    <div>
        <div className="w-full   h-full mt-6 flex-col items-center flex">
        <h1 class="text-3xl font-medium text-center mt-4 mb-4">Save your notes here!</h1>

      <form onSubmit={handleSubmit}   ref={createNoteFormRef} onClick={(e)=>handleVisibility(e)}
        className={`bg-white w-[50%]  shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col`}
        id="createNoteForm"
      >
        <div className="mb-4">
          <input required
            placeholder="Title..."
            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            name="noteTitle"
          />
        </div>
        <div className={!show ? "hidden " : ""}>
          <input required
            placeholder="Tagline goes here..."
            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            type="text"
            name="noteTagline"
          />
          <textarea required
            placeholder="Add Content Here..."
            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            name="noteContent"
            rows="4"
          />
        </div>
        <button 
    
          type="submit"
          className={`${
            !show
              ? "hidden"
              : "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center transition duration-300 ease-in-out"
          }`}
        >
          + Add Note
        </button>
      </form>
    </div>
    </div>
  )
}

export default Form