import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>()

  constructor() { }
  getall(){
    return this.notes;
  }

  get(id:number){
    console.log(this.notes[id])
    return this.notes[id];

  }

  getId(note: Note){
    return this.notes.indexOf(note);
  }

  add(note: Note){

    let newlength = this.notes.push(note);
    let index = newlength - 1;
    return index;
  }

  update(id:number , title: string, body : string){
    let note = this.notes[id];
    note.title =title;
    note.body = body;
  }

  delete(id: number){
    this.notes.splice(id, 1)
  }
}
