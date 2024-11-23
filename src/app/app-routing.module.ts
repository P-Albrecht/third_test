import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviromentComponent } from "./enviroment/enviroment.component";
import { ChatComponent } from 'src/app/chat/chat.component';
import { SettingsComponent } from 'src/app/settings/settings.component';
import { TreeViewComponent } from 'src/app/tree-view/tree-view.component';

const routes: Routes = [
    { path: 'ChatComponent'
      , component: EnviromentComponent },
    { path: 'SettingsComponent'
      , component: EnviromentComponent },
    { path: 'TreeViewComponent'
      , component: EnviromentComponent },
    { path: 'enviroment', component: EnviromentComponent },
    { path: '', redirectTo: '/enviroment', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
