import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'savings', pathMatch: 'full' },
  { path: 'savings', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'enter-savings', loadChildren: './enter-savings/enter-savings.module#EnterSavingsPageModule' },
  { path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
