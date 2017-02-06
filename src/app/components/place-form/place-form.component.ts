import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IPlace, Place } from './../models/';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.css']
})
export class PlaceFormComponent implements OnInit {
  // поля формы
  private place: IPlace = new Place();

  // textarea fields
  private txtAreaFields: Array<string> = ['accommodation', 'food', 'price',
    'infrastructure', 'beach', 'addInfo', 'contacts'];

  constructor() { }

  ngOnInit() {
    /**
     * инициализация редактора для текстерия полей
     * window['CKEDITOR'].instances.accommodationField.setData('1111');
     */
    this.txtAreaFields.forEach( (field) => {
      window['CKEDITOR']['replace'](`${field}Field`);
    });
  }

  onSubmit(placeForm: NgForm) {
    // получение полей, для которых нет редактора
    Object.assign(this.place, placeForm.value);

    // получение значения полей, для которых настроен редактор
    let ckEditor = window['CKEDITOR'].instances;
    this.txtAreaFields.forEach((field) => {
      this.place[field] = ckEditor[`${field}Field`].getData();
    });

    // вывод значений полей
    console.log(this.place);
  }

}
