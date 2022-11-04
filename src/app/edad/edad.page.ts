import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  edad:number;
  name:string;


  constructor(
    private http: HttpClient
  ) { }

  Descubrir(){
    this.http.get<any>('https://api.agify.io/?name='+this.name)
    .subscribe(res => {
      console.log(res);
      this.edad = res.age;

    })
  }
  
  ngOnInit() {
  }

}
