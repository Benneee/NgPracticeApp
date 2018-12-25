import { Component, OnInit,Output, ViewChild, ElementRef, EventEmitter } from "@angular/core";
import { Genre } from "src/app/shared/genre.model";

@Component({
  selector: 'app-listnew',
  templateUrl: './listnew.component.html',
  styleUrls: ['./listnew.component.css']
})
export class ListnewComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('keyInput') keyInputRef: ElementRef;
  @Output() genreAdded = new EventEmitter<Genre>();

  constructor() { }

  ngOnInit() {
  }
  onAddItem() {
    const genName = this.nameInputRef.nativeElement.value;
    const genKey = this.keyInputRef.nativeElement.value;
    const newGenre = new Genre(genName, genKey);
    this.genreAdded.emit(newGenre);
  }
}
