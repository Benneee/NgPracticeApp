import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	@Output() featureSelected = new EventEmitter<string>()
	//The @Output here binds this component to the event declared in the .html file and in the appcomponent.html file

	onSelect(feature: string) {
		this.featureSelected.emit(feature);
	}
}
