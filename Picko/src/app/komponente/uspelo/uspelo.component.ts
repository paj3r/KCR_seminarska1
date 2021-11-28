import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uspelo',
  templateUrl: './uspelo.component.html',
  styleUrls: ['./uspelo.component.css']
})
export class UspeloComponent implements OnInit {
  @HostListener('document:keydown.control.n')
  doSomething() {this.router.navigate(['narocilo'])}

  constructor(private router:Router) { }

  rand!:number
  ngOnInit(): void {
    this.rand = this.randomIntFromInterval(15,60)
    setTimeout(() => {
      this.router.navigate(['']);
    }, 10000); 
  }
  randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
