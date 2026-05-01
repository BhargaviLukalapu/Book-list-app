import { Component } from '@angular/core';
import { Book } from '../book';
import { NgFor } from "../../../node_modules/@angular/common";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent{
 books:Book[]=[
  {id : 1, author : "Author one", title : "Title one"},
  {id : 2, author : "Author Two", title : "Title Two"},
  {id : 3, author : "Author three", title : "Title three"}
 ]
}

