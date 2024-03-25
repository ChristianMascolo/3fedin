import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgramDTO } from '../model/ProgramDTO';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url = "http://192.168.233.133:8080";
  private subject = new Subject<void>();

  constructor(private http: HttpClient) {}

  subjectChange(){
    this.subject.next();
  }

  getSubject(): Subject<void>{
    return this.subject;
  }

  getAll() {
    return this.http.get(`${this.url}/api/programma/visualizzaProgrammi`);
  }

  addProgram(program: ProgramDTO) {
    return this.http.post(`${this.url}/api/programma/inserisciNuovoProgramma`, program);
  }

  removeProgram(id: number) {
    return this.http.delete(`${this.url}/api/programma/eliminaProgramma?id=${id}`);
  }

  modificaProgramma(id: number, program: ProgramDTO) {
    return this.http.put(`${this.url}/api/programma/modificaProgramma?id=${id}`, program);
  }
}
