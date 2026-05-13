import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { NgFor } from "../../../node_modules/@angular/common";
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{

  constructor(private bookService:BookService){}

  books:Book[]=[] //intializing the books array

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks():void{
    this.bookService.getBooks().subscribe(booksFromApi=>this.books=booksFromApi); //subscribe as getbooks returns an observable and subscribe notifies when the request is processed.
  }


}

