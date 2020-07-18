import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { DataService } from '../service/data.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  // notes: Note[] = new Array<Note>()
  notes: Note[] = new Array<Note>();

  constructor(private dataService : DataService) { }
  getall(){

    this.dataService.getNotes().subscribe((note)=>{


      // this.notes = note
      console.log(this.notes)
      console.log(note)
      // this.notes.push(...note)
      this.notes =this.notes.concat(note)
      // this.notes.push(...note);
      console.log(this.notes)
    }

    )
    console.log(this.notes)
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
    this.dataService.storeNotes(note);
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
