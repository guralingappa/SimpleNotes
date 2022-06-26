import { defineStore } from "pinia";
import { Note } from "../NotesModel";


export const notesStore = defineStore("note", {
 state:(()=>{
    return {
        Notes:new Array<Note>(),
        Counter:0,
    }
 }),
 actions:{
    addNote(Note:Note){
        this.Notes.push(Note);
    }
 },
 
});