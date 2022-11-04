import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  genero:string;
  name:string;


  constructor(
    private http: HttpClient
  ) { }

  Descubrir(){
    this.http.get<any>('https://api.genderize.io/?name='+this.name)
    .subscribe(res => {
      console.log(res);
      this.genero = res.gender;
      console.log(this.genero)
    })
  }
  ngOnInit() {

  }

}
