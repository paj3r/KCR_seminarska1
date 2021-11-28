import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './komponente/home/home.component';
import { NarociloComponent } from './komponente/narocilo/narocilo.component';
import { NarocnikComponent } from './komponente/narocnik/narocnik.component';
import { UspeloComponent } from './komponente/uspelo/uspelo.component';
import { NgxElectronModule } from 'ngx-electron';
import { KeyboardShortcutsModule }     from 'ng-keyboard-shortcuts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NarociloComponent,
    NarocnikComponent,
    UspeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxElectronModule,
    KeyboardShortcutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
