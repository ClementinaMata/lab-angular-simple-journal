import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
// import { SingleEntryComponent } from './single-entry/single-entry.component';

import { RouterModule } from '@angular/router';
import { routes } from './routes';

import { JournalService } from '../services/journal.service';
import { SinleEntryComponent } from './sinle-entry/sinle-entry.component';



@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SinleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
