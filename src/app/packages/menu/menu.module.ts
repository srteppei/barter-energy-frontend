import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ToolBarComponent } from './component/tool-bar/tool-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavBarComponent, ToolBarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    RouterModule
  ],
  exports: [ToolBarComponent]
})
export class MenuModule { }
