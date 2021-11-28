import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `<input (document:keydown.meta.k)="doSomething()">`
})
export class HomeComponent implements OnInit {
  @HostListener('document:keydown.control.n')
  doSomething() {this.router.navigate(['narocilo'])}

  constructor(private router:Router, private renderer: Renderer2
    ) { }
  ngOnInit(): void { 
  }

}

