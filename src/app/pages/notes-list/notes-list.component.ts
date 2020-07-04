import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [
    trigger('itemAnim',[
      transition('void => *',[

        style(
          {
            height: 0,
            opacity: 0,
            transform: 'scale(0.85)',
            'margin-bottom' : 0,

            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 0,
          }),
          // spacing
          animate('50ms', style({
            height: '*',
            'margin-bottom' : '*',
            paddingTop: '*',
            paddingBottom: '*',
            paddingRight: '*',
            paddingLeft: '*',
          })),
          animate(100)
      ]),

      transition('* => void',[

        animate(50, style({
          transform: 'scale(1.05)'
        })),
        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75
        })),
        animate('120ms ease-out', style({
          transform: 'scale(0.68)',
          opacity: 0,
          height: 0,
          'margin-bottom' : 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }))
      ]),


    ])
  ]
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
