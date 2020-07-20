import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private globalDataUrl = "https://notesappapi.herokuapp.com/notes";

  // notes: Note[] = new Array<Note>()
  notes: Note[] = new Array<Note>();
  notes1: Note[] = new Array<Note>();


  constructor(
    private http: HttpClient
  ) { }


  setNotes(note){
    // this.notes =this.notes.concat(note)
    // console.log(note)
    // this.notes.push(...note);
      // console.log(this.notes['0']['Notes'])
      this.notes1 = note['Notes'];
      this.notes.push(...this.notes1)
    //   console.log(this.notes)
  }

  getall(){

    // this.dataService.getNotes().subscribe((note)=>{
    //   // this.notes =this.dataService.getNotes()

    //   // this.notes = note

    //   this.notes =this.notes.concat(note)
    //   // this.notes.push(...note);
    //   // console.log(this.notes['0']['Notes'])
    //   this.notes1 =this.notes['0']['Notes'];
    //   this.notes.push(...this.notes1)
    //   console.log(this.notes)
    // }
    // console.log(this.notes)
    // )
    return this.notes;
  }

  get(id:number){

    // console.log(this.notes[id])
    return this.notes[id];

  }

  getId(note: Note){
    return this.notes.indexOf(note);
  }

  add(note: Note){
  //  this.notes = [];

    let newlength = this.notes.push(note);
    let index = newlength - 1;
    return index;
  }

  update(id:number , title: string, body : string){
    let note = this.notes[id];
    note.title =title;
    note.body = body;
  }

  delete(id: number, note: Note){
    this.notes.splice(id, 1)
    // console.log(this.notes)
    const data = {'title' : note['title']}
    this.http.delete(this.globalDataUrl+'/'+data['title']).subscribe(
      response =>{
        // console.log(response)
      }


    )
    // console.log(this.notes)


  }
}
