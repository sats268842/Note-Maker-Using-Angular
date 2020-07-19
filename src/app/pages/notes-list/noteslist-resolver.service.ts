import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { DataService } from 'src/app/service/data.service';
import { NotesService } from 'src/app/shared/notes.service';
@Injectable({
  providedIn: 'root'
})
export class NoteslistResolverService implements Resolve<Note[]> {

  constructor(private dataservice : DataService,
    private noteService :NotesService ) { }

  note: Note[];
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

   const item =  this.noteService.getall();
  //  console.log(item)
  //  this.note = item['Notes']
  if (item.length === 0) {
    return  this.dataservice.getNotes();
  }
  return  item
  // return item
  // }


}
}
