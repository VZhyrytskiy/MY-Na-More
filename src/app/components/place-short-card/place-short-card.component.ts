import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-place-short-card',
  templateUrl: './place-short-card.component.html',
  styleUrls: ['./place-short-card.component.css']
})
export class PlaceShortCardComponent implements OnInit {
  @Input() place: any;
  @Input() region: string;
  @Input() city: string;

  constructor() { }

  ngOnInit() {
  }

}
