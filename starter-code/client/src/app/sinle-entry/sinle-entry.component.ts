import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sinle-entry',
  templateUrl: './sinle-entry.component.html',
  styleUrls: ['./sinle-entry.component.css']
})
export class SinleEntryComponent implements OnInit {

entry:any;
  constructor(
    public router:Router,
     public journalService:JournalService,
     public route:ActivatedRoute) {
     route.params.subscribe(params => {
       this.journalService.getSingleEntry(params['id'])
         .subscribe(entry => this.entry = entry);
     })
}
  ngOnInit() {
  }

}
