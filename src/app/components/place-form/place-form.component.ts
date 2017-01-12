import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.css']
})
export class PlaceFormComponent implements OnInit {
// поля формы
  private place = {
    accommodation: '',
    food: '',
    price: '',
    infrastructure: '',
    beach: '',
    addInfo: '',
    contacts: ''
  };

  constructor() { }

  ngOnInit() {
    /**
     * инициализация редактора для текстерия полей
     */
    for (let key in this.place) {
      if (this.place.hasOwnProperty(key)) {
        window['CKEDITOR']['replace'](`${key}Field`);
      }
    }

    // установка значения
    // window['CKEDITOR'].instances.accommodationField.setData('1111');
  }

  onSubmit(event: any) {
    // получение значения полей
    let ckEditor = window['CKEDITOR'].instances;

    for (let key in this.place) {
      if (this.place.hasOwnProperty(key)) {
        this.place[key] = ckEditor[`${key}Field`].getData();
      }
    }

    // вывод значений полей
    console.log(this.place);
  }

}
