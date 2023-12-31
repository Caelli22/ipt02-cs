import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendPage } from './send.page';

const routes: Routes = [
  {
    path: '',
    component: SendPage
  },
  {
    path: 'sent',
    loadChildren: () => import('./sent/sent.module').then( m => m.SentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendPageRoutingModule {}
