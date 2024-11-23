import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { FlaskapiService } from './flaskapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  routeList:string[][] = [
  ]

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private flaskapiService: FlaskapiService) {
  }

  async ngOnInit() {

  }

  onClickMe() {
    let t = (<HTMLInputElement>document.getElementById('interaction')).value
    console.log(t)

  }

  navClick(indexI: number) {                                                                                           
    let routeNav = ''                                                                                                  
    for (let e in this.routeList[indexI]) {                                          
      if (this.routeList[indexI][e].includes(':')){                                                                           
        routeNav = routeNav + '/' + (<HTMLInputElement>document.getElementById('param_' + indexI + '_' + e)).value;  
      } else {                                                                                                                
        routeNav = routeNav + '/' + this.routeList[indexI][e];                                                                
      }                                                                                                                       
    }                                                                                                                         
    this.router.navigate([routeNav]).then(() => {                                                             
      window.location.reload();                                                                                       
    });                                                                                                               
  }     
}

