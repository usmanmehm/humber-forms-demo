import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookInfoComponent } from './book-info/book-info.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  { path: '', component: BookInfoComponent},
  { path: 'book-info', component: BookInfoComponent},
  { path: 'book-details', component: BookDetailsComponent}
]

@NgModule({
  declarations: [
    BookInfoComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BooksModule { }
