import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss']
})
export class NotesDetailComponent implements OnInit {

  note: Note;
  noteID: number;
  new: boolean;

  constructor(private notesService: NotesService,
    private router: Router,
    private route : ActivatedRoute,
    private dataService : DataService
    ) { }

  ngOnInit(){

    this.route.params.subscribe((params: Params)=>{

      this.note = new Note();
      if(params['id']){
        this.note = this.notesService.get(params.id)
        this.noteID = params.id;
        this.new = false;

        }
      else{
        this.new = true;
      }
    })

  }

  onSubmit(form: NgForm) {
    if(this.new){
      this.notesService.add(form.value)

    }
    else{
      this.notesService.update(this.noteID, form.value.title, form.value.body)
    }
    this.dataService.storeNotes(form.value)
    this.router.navigateByUrl('/')
  }

  onCancel(){
    this.router.navigateByUrl('/')
  }

}
