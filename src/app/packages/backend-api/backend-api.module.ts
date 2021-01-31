import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from './service/contact.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
})
export class BackendApiModule { }
