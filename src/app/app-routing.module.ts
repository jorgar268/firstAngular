import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { CharacterListComponent } from './components/pages/characters/character-list/character-list.component';
import { AboutComponent } from './components/pages/about/about.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'list', component: CharacterListComponent },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'character-list',
    loadChildren: () =>
      import(
        './components/pages/characters/character-list/character-list.module'
      ).then((m) => m.CharacterListModule),
  },
  {
    path: 'character-details/:id', //añado id para que cuando usuario acceda saber que id cargar
    loadChildren: () =>
      import(
        './components/pages/characters/character-details/character-details.module'
      ).then((m) => m.CharacterDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// T E M A   P A T H S
// {
//   path: '2',
//   redirectTo: 'ABOUT',
//   pathMatch: 'full',
// },
// {
//   path: 'character-list',
//   loadChildren: () =>
//     import(
//       './shared/components/header/ABOUT.module'
//     ).then((m) => m.ABOUT.MOCULE),
// },
// {
