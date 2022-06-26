<template>
  <q-page class="q-ma-lg">
  <div class="row">
  <q-btn color="primary" class="row col-md-1 offset-md-11" dense align="right" glossy @click="addNote">Add Note</q-btn>
 </div>
 <q-form v-show="showAddNote" class="row justify-center">
 <q-input type="text" class="col-md-3" v-model="Note.Html"></q-input>
 <q-btn color="primary" @click="createNote(Note)">Add</q-btn>
 </q-form>
  <q-card v-for="note in Notes" :key="note.Id" class="q-ma-md row">
  <q-item>{{note.Html}}
  </q-item>
  </q-card>
  </q-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {mapWritableState,mapActions } from 'pinia'
import { notesStore } from './store/notestore'
import {Notify} from 'quasar';
import {Note} from './NotesModel';
export default defineComponent({
    name:'NotesList',
    data(){
    return {
        showAddNote:false,
        Note:new Note(),        
    }
    },
    computed:{
      ...mapWritableState(notesStore,["Notes"])
    },
    methods:{
        ...mapActions(notesStore,{createNote:"addNote"}),
        addNote(){
        this.showAddNote=true;
        },
    }
})
</script>

<style>

</style>