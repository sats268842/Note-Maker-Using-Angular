import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotesDetailComponent } from './pages/notes-detail/notes-detail.component';
import {NoteslistResolverService } from '../app/pages/notes-list/noteslist-resolver.service';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    {path: '', component: NotesListComponent, resolve: [NoteslistResolverService]},
    { path: 'new', component: NotesDetailComponent},
    { path: ':id', component: NotesDetailComponent}
   ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
