import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { UpdateRoomComponent } from './update-room/update-room.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRoomComponent,
    RoomDetailsComponent,
    RoomListComponent,
    UpdateRoomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//ESSE AQUI EU TNHO QUE VER OQ FOI FEITO, ESSE AQUI ELA TACOU O FODA-SE NO CONTROL C E CONTROL V SEM MOSTRAR NADA