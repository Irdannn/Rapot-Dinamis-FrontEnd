import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSiswaService {
  private baseUrl: string = 'http://localhost:8000/api/siswa/';

  constructor(private http: HttpClient) { }

  getAllsiswa(){
    return this.http.get<any>(`${this.baseUrl}index`)
  }
}
