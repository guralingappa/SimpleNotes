import {useState} from 'react';

export default function AddNotes() {
    const [note, onChange]=useState('');    
    const addNotes=()=>{
        let notes = [...new Set(JSON.parse(localStorage.getItem("notes")))];
        notes.push({Name:note});
        localStorage.setItem("notes",JSON.stringify(notes));
    }
    return (
        <div>
<label>Name</label>
<input onChange={(e)=>onChange(e.target.value)}></input>
<button onClick={addNotes}>Add</button>


        </div>
    )
}