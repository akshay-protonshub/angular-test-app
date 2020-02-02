import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { InMemoryDbService } from 'angular-in-memory-web-api/interfaces';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
  
  url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story'
  constructor(private http: HttpClient) { }
   
  // getData(): Observable<any>{
  //  return this.http.get(this.url).pipe(
  //   map((res: any) => res.json()));
  
  // }

  getData(): Observable<any>{
    return this.http.get(this.url);
   
   }

   getJsonData(): Promise<any[]>{
    return this.http.get<any[]>('http://localhost:4200/src/app/data/data.json').toPromise();
  }

  public postTests(object) {
    return this.http.post("http://localhost:4200/src/app/data/data.json", object).subscribe(data => {console.log("POST Request is successful ", data);},error => {console.log("Error", error);});
  }
}
