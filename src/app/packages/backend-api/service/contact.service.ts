import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BackendApiModule } from '../backend-api.module';

@Injectable({
  providedIn: BackendApiModule
})
export class ContactService {

  private url = `${environment.backendApi.url}/contact`

  constructor(
    private httpClient: HttpClient,
  ) { }

  uploadContacts(file: File) {
    const formData = new FormData();
    formData.append('contacts.vcf', file)
    return this.httpClient.post<any[]>(`${this.url}/upload`, formData);
  }

}
