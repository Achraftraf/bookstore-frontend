import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },  // Default redirect
  { path: 'books', component: BookListComponent },       // List books
  { path: 'books/add', component: BookFormComponent },   // Add a book
  { path: 'books/edit/:id', component: BookFormComponent } // Edit book by ID
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
