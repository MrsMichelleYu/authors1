import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  newAuthor: any;
  error: any;
  ngOnInit() {
    this.newAuthor = { name: '' };
  }
  onSubmit() {
    console.log(this.newAuthor);
    const observable = this.httpService.addAuthor(this.newAuthor);
    observable.subscribe(newAuthor => {
      if (newAuthor['err']) {
        console.log('We have an error', newAuthor);
        this.error = newAuthor['err'];
      } else {
        console.log('We got our new author', newAuthor);
        this.goHome();
        this.newAuthor = { name: '' };
      }
    });
  }
  goHome() {
    this.router.navigate(['/index']);
  }

}
