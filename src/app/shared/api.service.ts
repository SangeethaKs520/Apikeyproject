import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tenantId } from '../models/tenant';
import { services } from '../models/service';
import { Observable } from 'rxjs';
import { dhiApiKeyServiceDetailsDTO } from '../models/dhiApiKeyServiceDetailsDTO'
import { DhiApiKeyBasicDTO } from '../models/dhi-api-key-basic-dto';
import { keydetails } from '../models/keydetails';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url = environment.baseUrlKey;


  constructor(private http: HttpClient) { }


  serviceNames() {
    return this.http.get<string[]>(`${this.base_url}servicenames`);
  }

  allTenantIds() {
    return this.http.get<string[]>(`${this.base_url}alltenantids`);
  }

  apiServiceDetails() {
    return this.http.get<tenantId[]>(`${this.base_url}allactivekeys`);
  }

  updateStatus(id: string, status: string) {
    return this.http.put<keydetails>(`${this.base_url}update/${id}/${status}`, {});
  }

  apiservices() {
    return this.http.get<services[]>(`${this.base_url}allservices`);
  }

  deleteService(id: string) {
    return this.http.delete<services[]>(`${this.base_url}removeservice/${id}`);
  }

  addApiServices(data: dhiApiKeyServiceDetailsDTO[]) {
    return this.http.post<any>(`${this.base_url}addnewservice`, data);
  }


  createNewApiKey(dhiApiKeyBasicDTO: DhiApiKeyBasicDTO[]) {
    return this.http.post<keydetails>(`${this.base_url}newapikey`, dhiApiKeyBasicDTO);
  }


  getDhiApiKeyForGivenTenant(tenantId: string) {
    return this.http.get<keydetails>(`${this.base_url}tenantkeys/${tenantId}`);
  }
}