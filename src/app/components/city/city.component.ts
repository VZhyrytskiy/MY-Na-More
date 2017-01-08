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
  private region: string;       // параметр роута
  private regionName: string;   // название области
  private city: any;            // параметр роута
  private places: Array<any>;   // массив мест

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
     this.sub = this.activatedRoute.params.subscribe(params => {
      // получаем параметры из урла
      this.region = params['region'];
      this.city = params['city'];

      // получаем информацию о городе
      this.dataService.getCity(this.region, this.city)
        .then(response => this.city = response)
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
