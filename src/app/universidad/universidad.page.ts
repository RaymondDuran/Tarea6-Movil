import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.page.html',
  styleUrls: ['./universidad.page.scss'],
})
export class UniversidadPage implements OnInit {

  universidad = [];
  country:string;


  constructor(
    private http: HttpClient
  ) { }
  
  


  Descubrir(){
    this.http.get<any>('http://universities.hipolabs.com/search?country='+this.country)
    .subscribe(res => {
      console.log(res);
      this.universidad = res;
      console.log(this.universidad)
    })
  }

  ngOnInit() {
  }

  
}
