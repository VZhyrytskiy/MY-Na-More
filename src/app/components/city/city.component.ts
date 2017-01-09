import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  private sub: Subscription;
  private regionParam: string;     // параметр роута
  private cityParam: string;      // параметр роута

  private region: any;   // объект область
  private city: any;     //объект город
  private places: Array<any>;   // массив мест

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
     this.sub = this.activatedRoute.params.subscribe(params => {
      // получаем параметры из урла
      this.regionParam = params['region'];
      this.cityParam = params['city'];

      // получаем область
      this.dataService.getRegion(this.regionParam)
        .then(response => {
          // console.log(response);
          this.region = response;
        });

      // получаем город
      this.dataService.getCity(this.regionParam, this.cityParam)
        .then(response => {
          return this.city = response;
        })
        .then(city => {
          // получаем места города
          this.dataService.getPlaces(city.id)
            .then(response => {
              this.places = response;
            });
        });
    });
  }

}
