import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Note } from '../shared/note.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  storeNotes(note: Note[]) {
    let heading = note['title'];
    this.http.put('https://notesappapi.herokuapp.com/notes', heading).subscribe(
      response =>{
        console.log(response)
      }
    )
  }
}
