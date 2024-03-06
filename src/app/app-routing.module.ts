import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExposantsComponent } from './exposants/exposants.component';


const routes: Routes = [
  { path: '', component: ExposantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
