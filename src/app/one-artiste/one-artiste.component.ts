import { Component, OnInit, Input } from '@angular/core';
import { Artiste } from '../shared/oneartiste.model';


@Component({
  selector: 'app-one-artiste',
  templateUrl: './one-artiste.component.html',
  styleUrls: ['./one-artiste.component.css']
})
export class OneArtisteComponent {
	@Input() artistes: Artiste[] = [
	new Artiste('Praiz', 'PFA Graduate')
	];
}
