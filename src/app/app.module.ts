import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserchoiceComponent } from './userchoice/userchoice.component';
import { ListnewComponent } from './userlist/listnew/listnew.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { OneArtisteComponent } from './one-artiste/one-artiste.component';
import { DropDownDirective } from 'src/app/shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    HeaderComponent,
    FooterComponent,
    UserchoiceComponent,
    ListnewComponent,
    UserdetailComponent,
    OneArtisteComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
