import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsideMenuComponent } from './components/sside-menu/sside-menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SsideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SsideMenuComponent
  ]
})
export class SharedModule { }
