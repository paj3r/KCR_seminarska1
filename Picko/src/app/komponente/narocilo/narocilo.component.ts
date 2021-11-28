import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from 'ngx-electron';


@Component({
  selector: 'app-narocilo',
  templateUrl: './narocilo.component.html',
  styleUrls: ['./narocilo.component.css']
})
export class NarociloComponent implements OnInit {

  @HostListener('document:keydown.control.b')
  doSomething() {this.router.navigate([''])}

  st_pic: number = 0;
  pice = ["Margerita", "Klasična", "Zelenjavna", "Kmečka", "Kraška", "Morska"]
  sestavine = [["Pelati", "Mozarella", "Bazilika"],["Pelati", "Mozarella", "Šunka", "Gobice"],
  ["Pelati", "Mozarella","Bučke","Koruza", "Bazilika"],["Pelati", "Mozarella", "Suha salama", "Kranjska klobasa"],
  ["Pelati", "Mozarella","Pršut", "Bazilika"],["Pelati", "Mozarella", "Morski sadeži", "Tržaška omaka"]]
  dodatki = ["Koruza", "Jajce", "Artičoke", "Bučke", "Kisla smetana", "Čebula", "Pršut","Paprika"]
  isSelected: boolean = false;
  neki!: number[];
  selected_bool!: boolean[];
  selected!: number[];
  numbers!: number[];

  constructor(private router: Router,private electron: ElectronService) { }

  ngOnInit(): void {
  }
  counter(i: number) {
    return new Array(i);
}
  writ(){
    console.log(this.selected)
  }
  updateSt_pic() {
    var inp = (<HTMLInputElement>document.getElementById("st_pic")).value;
    if (inp!=""){
      this.st_pic = +inp
      this.isSelected = true;
      this.numbers=Array(this.st_pic);
      this.selected_bool=Array(this.st_pic)
      this.neki=Array(this.st_pic)
      this.selected=Array(this.st_pic);
    }else{
      if(this.electron.isElectronApp){
        this.electron.remote.dialog.showMessageBox({
          type:"info",buttons: ["V redu"], title:"Opozorilo",
          message: "Vnesite število pic",
        })}
    }
  }
  resetSt_pic() {
    (<HTMLInputElement>document.getElementById("st_pic"))!!.value="";
    this.st_pic=0;
    this.isSelected = false;
    this.numbers=[];
    this.selected=[];
    this.selected_bool=[];
  }
  check(){
    var err=false
    for(let i = 0;i<this.st_pic;i++){
      if(this.selected[i]==null&&this.neki[i]==null&&!err){
        this.electron.remote.dialog.showMessageBox({
          type:"info",buttons: ["V redu"], title:"Opozorilo",
          message: "Vnesite vrsto in velikost "+(i+1)+". pice.",
        })
        err=true
        break;
      }
      if(this.selected[i]==null&&!err){
        this.electron.remote.dialog.showMessageBox({
          type:"info",buttons: ["V redu"], title:"Opozorilo",
          message: "Vnesite vrsto "+(i+1)+". pice.",
        });
        err=true;
        break;
      }
      if(this.neki[i]==null&&!err){
        this.electron.remote.dialog.showMessageBox({
          type:"info",buttons: ["V redu"], title:"Opozorilo",
          message: "Vnesite velikost "+(i+1)+". pice.",
        })
        err=true;
        break;
      }
    }
    if(!err)
      this.router.navigate(['next'])
  }
  

}
