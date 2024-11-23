import { NgModule } from '@angular/core';
import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ChatComponent} from 'src/app/chat/chat.component';
import {LlamaService} from 'src/app/llama.service';
import {SettingsComponent} from 'src/app/settings/settings.component';
import {TreeViewComponent} from 'src/app/tree-view/tree-view.component';
import {TreeViewModule} from 'src/app/tree-view/tree-view.module';

@NgModule({
  declarations: [
    EnviromentComponent,
    ChatComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TreeViewComponent,
    TreeViewModule,
  ],
  exports: [
    EnviromentComponent,
  ],
  providers: [
    LlamaService,
  ],
  bootstrap: [
  ]
})
export class EnviromentModule { }
