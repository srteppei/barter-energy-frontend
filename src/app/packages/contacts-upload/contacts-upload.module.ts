import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsUploadComponent } from './components/contacts-upload/contacts-upload.component';
import { UploadFileModule } from '../upload-file/upload-file.module';



@NgModule({
  declarations: [ContactsUploadComponent],
  imports: [
    CommonModule,
    UploadFileModule
  ],
  exports: [
    ContactsUploadComponent
  ]
})
export class ContactsUploadModule { }
