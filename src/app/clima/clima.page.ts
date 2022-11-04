import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  temp: string;
  clima: string;
  ngOnInit() {
    this.http.get<any>('http://api.weatherunlocked.com/api/current/18.485596845714742,-69.99998114761979?app_id=48350e55&app_key=d075b1c4fdb237cca7a5c24ffc9509e0')
      .subscribe(res => {
        this.clima = res.wx_desc;
        this.temp = res.temp_f;
      })
  
  }

}
