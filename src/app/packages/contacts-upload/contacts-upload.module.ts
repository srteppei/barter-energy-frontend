import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ContactsUploadComponent } from './components/contacts-upload/contacts-upload.component';
import { UploadFileModule } from '../upload-file/upload-file.module';
import { BackendApiModule } from '../backend-api/backend-api.module';

@NgModule({
  declarations: [ContactsUploadComponent],
  imports: [
    CommonModule,
    UploadFileModule,
    BackendApiModule,
    MatSnackBarModule
  ],
  exports: [
    ContactsUploadComponent,
  ]
})
export class ContactsUploadModule { }
