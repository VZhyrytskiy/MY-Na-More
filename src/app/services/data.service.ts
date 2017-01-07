import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  constructor(
    private http: Http
  ) { }

  /**
   * Метод возвращает промис модели данных
   */
  getSeaAndRegions(): Promise<any> {
    return this.http.get('/assets/data/places.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }

  // метод по заданому региону, например odessa-region возвращает города
  getRegion(searchRegion: string) {
    return this.getSeaAndRegions()
    .then(response => {
        let region;

      // цикл поморям
        response.forEach((sea) => {

        //  если еще область не нашли, то ищем
        if (!region) {
          // фильтр по областям моря
          region = sea.regions.find((reg) => {
            return reg.link === searchRegion;
          });
        }
      });
      return region;
    });
  }



}