import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSalesEntryComponent } from './new-sales-entry/new-sales-entry.component';

const routes: Routes = [
 {
     path: 'newsales',
     component: NewSalesEntryComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
