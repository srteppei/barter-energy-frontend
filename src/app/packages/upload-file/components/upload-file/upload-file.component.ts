import { Target } from '@angular/compiler';
import { Input } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {

  @Input()
  public extension: string | undefined;

  @Output()
  public fileEvent = new EventEmitter<File>();

  handleFileInput(target: EventTarget | null) {
    if (target !== null && target instanceof HTMLInputElement && target.files !== null) {
      this.fileEvent.emit(target.files[0]);
    }
  }

}
