import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-upload',
  templateUrl: './contacts-upload.component.html',
  styleUrls: ['./contacts-upload.component.scss']
})
export class ContactsUploadComponent {

  fileEvent(file: File) {
    console.log(file);
  }

}
