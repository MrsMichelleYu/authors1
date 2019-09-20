import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  updateAuthor: any;
  error: any;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.getAuthorById(params['id']);
    });
  }
  editAuthor(id) {
    const observable = this.httpService.editAuthor(id, this.updateAuthor);
    observable.subscribe(data => {
      console.log(data);
      if (data['err']) {
        console.log('We have an error', this.updateAuthor);
        this.error = data['err'];
      } else {
        console.log('Edit one author!', data);
        this.goHome();
      }
    });
  }
  getAuthorById(id) {
    const observable = this.httpService.getAuthorById(id);
    observable.subscribe(oneAuthor => {
      console.log('We got one author', oneAuthor);
      this.updateAuthor = oneAuthor;
    });
  }
  goHome() {
    this.router.navigate(['/index']);
  }
}
