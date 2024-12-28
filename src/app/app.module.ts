import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponentComponent } from './Components/list-component/list-component.component';
import { AboutComponentComponent } from './Components/about-component/about-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './Components/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './Components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    AboutComponentComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
