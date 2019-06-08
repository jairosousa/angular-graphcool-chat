import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private appUrl = "https://api.graph.cool/simple/v1/cjwmsgavv3gjd016945kj2dga";

  constructor(
    private http: HttpClient
  ){
    this.allUsers();
  }

  allUsers():void {
    const body = {
      query: `
        query{
          allUsers{
            id
            name
            email
          }
        }
      `
    }

    this.http.post(this.appUrl, body)
      .subscribe(res => console.log('Query: ', res));

  }
}
