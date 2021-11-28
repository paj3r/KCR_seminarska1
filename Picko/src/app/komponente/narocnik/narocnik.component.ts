import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-narocnik',
  templateUrl: './narocnik.component.html',
  styleUrls: ['./narocnik.component.css']
})
export class NarocnikComponent implements OnInit {
  @HostListener('document:keydown.control.b')
  doSomething() {this.router.navigate(['narocilo'])}

  ime!: string;
  priimek!: string;
  kraj!: string;
  naslov!: string;
  bon!: boolean;
  placilo!: string;

  constructor(private router: Router,private electron: ElectronService) { }

  ngOnInit(): void {
  }
  check(){
    let err=false;
    if(this.ime==null&&!err){
      this.electron.remote.dialog.showMessageBox({
        type:"info",buttons: ["V redu"], title:"Opozorilo",
        message: "Vnesite ime naročnika",
      })
      err=true;
    }
    if(this.priimek==null&&!err){
      this.electron.remote.dialog.showMessageBox({
        type:"info",buttons: ["V redu"], title:"Opozorilo",
        message: "Vnesite priimek naročnika",
      })
      err=true;
    }
    if(this.naslov==null&&!err){
      this.electron.remote.dialog.showMessageBox({
        type:"info",buttons: ["V redu"], title:"Opozorilo",
        message: "Vnesite naslov naročnika",
      })
      err=true;
    }
    if(this.kraj==null&&!err){
      this.electron.remote.dialog.showMessageBox({
        type:"info",buttons: ["V redu"], title:"Opozorilo",
        message: "Vnesite kraj naročnika",
      })
      err=true;
    }
    if(this.bon==null&&!err){
      this.electron.remote.dialog.showMessageBox({
        type:"info",buttons: ["V redu"], title:"Opozorilo",
        message: "Izberite ali bo naročilo na študentski bon",
      })
      err=true;
    }
    if(this.placilo==null&&!err){
      this.electron.remote.dialog.showMessageBox({
        type:"info",buttons: ["V redu"], title:"Opozorilo",
        message: "Vnesite način plačila naročnika",
      })
      err=true;
    }
    if(!err){
      const choice = this.electron.remote.dialog.showMessageBoxSync(
        {
          type: 'question',
          buttons: ['Da', 'Ne'],
          title: ' Potrdi',
          message: 'Ste prepričani, da je vaše naročilo pravilno?',
          detail: 'Naročilo bo posredovano sistemu'
        });
      if (choice === 0) {
        this.router.navigate(['uspelo'])
      }
    }
  }

}
