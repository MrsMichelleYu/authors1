import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewAuthorComponent } from './new-author/new-author.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NewAuthorComponent,
    IndexComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
