import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  authors = {};
  ngOnInit() {
    this.getAllAuthors();
  }
  getAllAuthors() {
    const observable = this.httpService.getAuthors();
    observable.subscribe(allAuthors => {
      console.log('Got all our authors!', allAuthors);
      this.authors = allAuthors;
    });
  }
  deleteAuthor(id) {
    const observable = this.httpService.deleteAuthor(id);
    observable.subscribe(deletedAuthor => {
      console.log('We deleted one task!', deletedAuthor);
      this.getAllAuthors();
    });
  }
}
