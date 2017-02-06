export interface IPlace {
  id: number;
  name: string;
  accommodation: string;
  food: string;
  price: string;
  infrastructure: string;
  beach: string;
  addInfo: string;
  contacts: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
}

export class Place implements IPlace {
  constructor(
    public id = null,
    public name = '',
    public accommodation = '',
    public food = '',
    public price = '',
    public infrastructure = '',
    public beach = '',
    public addInfo = '',
    public contacts = '',
    public contactPerson = '',
    public contactEmail = '',
    public contactPhone = ''
  ) { }
}

