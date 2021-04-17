import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'; 
import {MaterialModule} from './modules/material-ui/material-ui.module';
import {HeadfootModule} from './modules/headfoot/headfoot.module';
import { CsvComponent } from './csv/csv.component';
import { JsonFirstComponent } from './json-first/json-first.component';
import { JsonButtonComponent } from './json-button/json-button.component';
@NgModule({
  declarations: [
    AppComponent,
    CsvComponent,
    JsonFirstComponent,
    JsonButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
  	MaterialModule,
    HeadfootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
