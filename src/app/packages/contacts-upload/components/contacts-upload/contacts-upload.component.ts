import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from 'src/app/packages/backend-api/service/contact.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacts-upload',
  templateUrl: './contacts-upload.component.html',
  styleUrls: ['./contacts-upload.component.scss']
})
export class ContactsUploadComponent {

  public file: File | null = null;

  constructor(
    private contactService: ContactService,
    private snackBar: MatSnackBar,
  ) {}

  uploadFile() {
    if (this.file !== null) {
      this.contactService
        .uploadContacts(this.file)
        .subscribe(
          response => this.snackBar.open(`Subidos ${response.length} contactos`,'', environment.configuration.snackbar),
          error => this.snackBar.open(error.message, '', environment.configuration.snackbar)
        );
    }
  }

  fileEvent(file: File) {
    this.file = file;
  }

}
