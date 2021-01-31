import { Target } from '@angular/compiler';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {

  @Output()
  public fileEvent = new EventEmitter<File>();

  handleFileInput(target: Target) {
    if (target !== null && target instanceof HTMLInputElement && target.files !== null) {
      this.fileEvent.emit(target.files[0]);
    }
  }

}
