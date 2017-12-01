import { Routes } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SinleEntryComponent } from './sinle-entry/sinle-entry.component';

 export const routes: Routes = [
     { path: '', component: EntryListComponent },
     { path: '**', redirectTo: '' },
     { path: 'journal-entries/:id', component: SinleEntryComponent },
 ];
