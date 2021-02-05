import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsUploadComponent } from './packages/contacts-upload/components/contacts-upload/contacts-upload.component';

const routes: Routes = [
  {
    path: 'contacts-upload',
    component: ContactsUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
