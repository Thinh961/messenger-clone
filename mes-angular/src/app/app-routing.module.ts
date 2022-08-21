import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessengerComponent } from './modules/messenger/messenger.component';

const routes: Routes = [
  {
    path: 'messenger',
    component:MessengerComponent
  },
  {
    path: '**',
    component:MessengerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
