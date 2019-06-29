import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-weather';

  dataone; // data for LA

  datatwo; // data for Houston

  constructor(public http:HttpClient) {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=LA,usa&APPID=5e76767d769ee0da1d76f7cf66104f15').subscribe(
      (res) => {
        console.log(res);
        this.dataone = res;
      },
      (err) => {
        console.log(err);
      }
    )

    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=houston,usa&APPID=5e76767d769ee0da1d76f7cf66104f15').subscribe(
      (res) => {
        console.log(res);
        this.datatwo = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
