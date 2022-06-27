import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getCurrentRecord(id: string): any {
    return this.http.get('assets/data.json').pipe(
      debounceTime(150)
    )
  }
}
