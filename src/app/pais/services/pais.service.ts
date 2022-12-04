import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrlv3_1: string = 'https://restcountries.com/v3.1';
  private apiUrlv2: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrlv3_1}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrlv3_1}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorId(id: string) {
    const url = `${this.apiUrlv3_1}/alpha/${id}`;
    return this.http.get<Country>(url);
    // this.buscarPais(id).subscribe((paises) => {
    //   return paises.filter((pais) => pais.cca3 === id);
    // });
  }
}
