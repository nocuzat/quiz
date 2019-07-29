import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'page1', loadChildren: './page/page1/page1.module#Page1PageModule' },
  { path: 'page2', loadChildren: './page/page2/page2.module#Page2PageModule' },
  { path: 'page3', loadChildren: './page/page3/page3.module#Page3PageModule' },
  { path: 'page4', loadChildren: './page/page4/page4.module#Page4PageModule' },
  { path: 'page5', loadChildren: './page/page5/page5.module#Page5PageModule' },
  { path: 'results', loadChildren: './page/results/results.module#ResultsPageModule' },
  { path: 'page6', loadChildren: './page/page6/page6.module#Page6PageModule' },
  { path: 'page7', loadChildren: './page/page7/page7.module#Page7PageModule' },
  { path: 'page8', loadChildren: './page/page8/page8.module#Page8PageModule' },
  { path: 'page9', loadChildren: './page/page9/page9.module#Page9PageModule' },
  { path: 'page10', loadChildren: './page/page10/page10.module#Page10PageModule' },
  { path: 'page11', loadChildren: './page/page11/page11.module#Page11PageModule' },
  { path: 'page12', loadChildren: './page/page12/page12.module#Page12PageModule' },
  { path: 'page13', loadChildren: './page/page13/page13.module#Page13PageModule' },
  { path: 'page14', loadChildren: './page/page14/page14.module#Page14PageModule' },
  { path: 'page15', loadChildren: './page/page15/page15.module#Page15PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
