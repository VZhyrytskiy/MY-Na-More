import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.css']
})
export class PlaceFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /**
     * инициализация редактора для текстерия полей
     */
    window['CKEDITOR']['replace']( 'accommodationField' );
    window['CKEDITOR']['replace']( 'foodField' );
    window['CKEDITOR']['replace']( 'priceField' );
    window['CKEDITOR']['replace']( 'infrastructureField' );
    window['CKEDITOR']['replace']( 'beachField' );
    window['CKEDITOR']['replace']( 'addInfoField' );
    window['CKEDITOR']['replace']( 'contactsField' );
  }

}
