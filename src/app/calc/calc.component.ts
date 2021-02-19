import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styles: [
  ]
})
export class CalcComponent implements OnInit {
valueA: number=0;
valueB: number=0;
  constructor() { }


  ngOnInit(): void {
  }

}
