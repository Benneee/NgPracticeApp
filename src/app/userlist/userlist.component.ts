import { Component } from '@angular/core';
import { Genre } from '../shared/genre.model';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
	genres : Genre[] = [
		new Genre ('Hip-Hop', 'H'),
		new Genre ('Rock', 'R'),
		new Genre ('Gospel', 'G'),
	];
	onGenreAdded(genre: Genre){
		this.genres.push(genre);
	}
}