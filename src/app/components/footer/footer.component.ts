// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
// export class FooterComponent implements OnInit {
export class FooterComponent {

  // constructor() { }

  // ngOnInit(): void {
  // }

  // anio = new Date().getFullYear();
  anio: number


  constructor() { // Es necesario que s ehaga en el constructor
    this.anio = new Date().getFullYear();
  }


}
