import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Note } from '../shared/note.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private globalDataUrl = "http://notesappapi.herokuapp.com/notes";

  storeNotes(note) {
    let title = note['title'];
    let body = note['body']

    const data = {'body' : body}
    this.http.put(this.globalDataUrl+  '/' + title, data
    ).subscribe(
      response =>{
        console.log(response)
      }
    )
  }


  getNotes() {
    // console.log(this.http.get<Note[]>(this.globalDataUrl))
   return this.http.get<Note[]>(this.globalDataUrl)
  }
}
