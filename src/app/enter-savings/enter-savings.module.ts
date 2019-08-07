import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnterSavingsPage } from './enter-savings.page';

const routes: Routes = [
  {
    path: '',
    component: EnterSavingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnterSavingsPage]
})
export class EnterSavingsPageModule {}
