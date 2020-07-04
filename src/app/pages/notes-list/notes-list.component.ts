import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  note: Note;

  notes: Note[] = new Array<Note>();
  constructor(private notesService: NotesService
      ) { }

  ngOnInit(): void {


   this.notes = this.notesService.getall();

  }

  deleteNote(id : number){
    this.notesService.delete(id);

  }

}
