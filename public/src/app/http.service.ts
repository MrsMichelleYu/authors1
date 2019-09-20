import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
    this.getAuthors();
  }
  getAuthors() {
    return this.http.get('/authors');
  }
  getAuthorById(id) {
    return this.http.get('/authors/' + id);
  }
  addAuthor(newAuthor) {
    return this.http.post('/authors/', newAuthor);
  }
  deleteAuthor(id) {
    return this.http.delete('/authors/' + id);
  }
  editAuthor(id, editedAuthor: any) {
    return this.http.put('/authors/' + id, editedAuthor);
  }
}
