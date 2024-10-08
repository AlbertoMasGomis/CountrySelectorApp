import { Injectable } from '@angular/core';
import { Country, Region } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _regions: Region[] = [
    Region.Africa,
    Region.America,
    Region.Asia,
    Region.Europe,
    Region.Oceania,
  ];

  constructor() {}

  get regions(): Region[] {
    return [...this._regions];
  }

}
