import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  constructor(private http: HttpClient) {}

  salvar(ServicoPrestado: ServicoPrestado) : Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>('http://localhost:8080/api/servicos-prestados', ServicoPrestado);
  }

  buscar(nome: string, mes:number) : Observable<ServicoPrestadoBusca[]>{
    const httpParams = new HttpParams()
    .set("nome", nome)
    .set("mes", mes ? mes.toString() : '');
  

    const url = 'http://localhost:8080/api/servicos-prestados' + "?" + httpParams.toString();
    return this.http.get<any>(url)
  }


}
