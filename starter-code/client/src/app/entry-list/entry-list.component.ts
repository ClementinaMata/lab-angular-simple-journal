import { Component, OnInit } from '@angular/core';
import {JournalService} from '../../services/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  manu:Array<any> = [];

constructor(public journalService:JournalService) {
  this.journalService.getJournalList().subscribe( list =>{
    this.manu = list;
  });
}

  ngOnInit() {
  }

}
