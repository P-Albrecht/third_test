import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlaskapiService } from "./flaskapi.service";
import { EnviromentComponent } from './enviroment/enviroment.component';
import { EnviromentModule } from './enviroment/enviroment.module';

@NgModule({
  declarations: [
    AppComponent,
    //EnviromentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    EnviromentModule
  ],
  providers: [FlaskapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
