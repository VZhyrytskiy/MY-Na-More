import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private region: string;       // параметр роута
  private regionName: string;   // название области
  private cities: Array<any>;   // список городов области

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      // получаем параметр из урла
      this.region = params['region'];

      // получаем название области и список городов региона
      this.dataService.getRegion(this.region)
        .then(response => {
          this.regionName = response.name;
          this.cities = response.cities;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
