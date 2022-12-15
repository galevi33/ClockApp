import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { interval, Subscription } from 'rxjs';
//import { Input } from '@angular/core';


@Component({
  selector: 'app-pre-clock',
  templateUrl: './pre-clock.component.html',
  styleUrls: ['./pre-clock.component.css'],
  animations: [
    
    trigger('pointToPoin', [
      state('APoint', style({
        transform: 'rotate(' + "{{paramName1}}" +'deg)'
      }), { params: { paramName1: "0" } }
      ),
      state('Bpoint', style({
        transform: 'rotate(' + "{{paramName2}}"+ 'deg)'
      }), { params: { paramName2: "0" } }),
      transition('APoint => Bpoint', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class PreClockComponent implements OnInit {
  isOpen = false;
  click = false;
  sub: any;
  sub2: any;
  vari: number = 180;
  degCounter: number = 0;
  actionName: string = 'transform: rotate(180deg);';
  styleProper: number = 0
  styleProper2: number = 0;
  startF() {
    this.isOpen = true;
    this.sub = interval(1000).subscribe(x => {
      this.firstClock();
    });
    this.sub2 = interval(500).subscribe(x => {
      this.secoundClock();
    });
  }

  stopF() {
    this.isOpen = false;
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
  firstClock() {
    this.vari += 6;
    this.actionName = 'transform: rotate(' + this.vari + 'deg);';
  }
  secoundClock() {
    this.styleProper = this.degCounter ;
    this.styleProper2 = this.degCounter + 3;
    this.degCounter += 3;
    this.click = !this.click;

  }
  constructor() { }

  ngOnInit(): void {
  }
 
}
