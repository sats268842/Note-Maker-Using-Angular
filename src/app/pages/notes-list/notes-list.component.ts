import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { DataService } from 'src/app/service/data.service';

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

  isLoading : boolean = false;
  notes: Note[] = new Array<Note>();
  filteredNotes: Note[] = new Array<Note>();
  constructor(private notesService: NotesService,
              private dataservice : DataService
      ) {
        // setTimeout(() => {
        //   this.isLoading = true;
        // }, 1000);
       }

  ngOnInit(): void {


    this.filteredNotes =[];
    this.notes =[];


    // this.dataservice.getNotes().subscribe((data) =>{
    //   this.filteredNotes = data

    // }
    //   )


   this.notes = this.notesService.getall();
  //  console.log(this.notes)
  //  this.filteredNotes = this.notesService.getall();

  this.filter(' ')
  }

  deleteNote(note : Note){
    let noteID = this.notesService.getId(note);
    this.notesService.delete(noteID, note);
    this.filteredNotes = this.notesService.getall();


  }

  generateNotesUrl(note: Note){
    let noteID = this.notesService.getId(note);
    return noteID;
  }


  filter(query: string){

    query =query.toLocaleLowerCase().trim();

    let allResults: Note[] = new Array<Note>();

    let terms: string[] =query.split(' ');

    terms = this.removeDuplicates(terms);

    terms.forEach(term => {
      let results: Note[] = this.relevantNotes(term);

      allResults = [...allResults, ...results]
    });



    let uniqueResults = this.removeDuplicates(allResults);
    this.filteredNotes = uniqueResults;

    this.sortByRelevancy(allResults);


  }

  removeDuplicates(arr: Array<any>): Array<any> {

    let uniqueResults:Set<any> = new Set<any>();
    arr.forEach(e => uniqueResults.add(e));

    return Array.from(uniqueResults);
  }

  relevantNotes(query: string): Array<Note>{

    query =query.toLocaleLowerCase().trim();
    let relevantNotes  = this.notes.filter(note =>{
      if(note.title && note.title.toLowerCase().includes(query)){
        return true;
      }
      if(note.body && note.body.toLowerCase().includes(query)){
        return true;
      }
      return false;
    })
    return relevantNotes;
  }

  sortByRelevancy(searchResults: Note[]){

    let noteCountObj: Object = {};

    searchResults.forEach( note => {
      let noteId = this.notesService.getId(note);

      if(noteCountObj[noteId]){
         noteCountObj[noteId] +=1;
      }
      else{
        noteCountObj[noteId] = 1;
      }
    })

    this.filteredNotes = this.filteredNotes.sort((a: Note, b:Note)=> {

      let aId = this.notesService.getId(a);
      let bId = this.notesService.getId(b)

      let aCount = noteCountObj[aId];
      let bCount = noteCountObj[bId];
      return bCount - aCount;
    })
    this.isLoading = true;

  }


}
