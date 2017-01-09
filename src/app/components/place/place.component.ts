import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  private sub: Subscription;
  private regionParam: string;    // параметр роута
  private cityParam: string;      // параметр роута
  private placeParam: string;     // параметр роута

  private region: any;   // объект область
  private city: any;     //объект город
  private place: any;   // место

   constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

   ngOnInit() {
     this.sub = this.activatedRoute.params.subscribe(params => {
      // получаем параметры из урла
      this.regionParam = params['region'];
      this.cityParam = params['city'];
      this.placeParam = params['place'];

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
          // получаем место
          this.dataService.getPlace(this.city.id, this.placeParam)
            .then(response => {
              // console.log(response);
              this.place = response;
              // создаем коллекцию фото
              this.place.photoLinks = [];
              for(let i=1; i<=this.place.photoCount; i++) {
                let photoLink = '/assets/images/'
                    + '0'.repeat(6 - String(this.place.id).length)
                    + this.place.id + '-'
                    + '0'.repeat(3 - String(i).length) + i + '.jpg';
                this.place.photoLinks.push(photoLink);
              }
            });
        });



     });

  }// end ngOnInit

}

