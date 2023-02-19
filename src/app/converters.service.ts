import { Injectable } from '@angular/core';
import { converter, converterCategory } from './converterInterfaces';
import { CONVERTER_DATA } from './data-converters';

@Injectable({
  providedIn: 'root'
})
export class convertersService {
  getAllCategories(): converterCategory[] {
    CONVERTER_DATA.forEach(category =>
      category.converters
      .filter(converter => !converter.name || converter.name.length === 0)
      .forEach(converter => 
        converter.name = converter.input + " to " + converter.output
        )
      )
    return CONVERTER_DATA
  }
  getConverters(category: converterCategory): converter[] {
    return category.converters
  }
  getDefaultSelectedCategory(): converterCategory {
    return CONVERTER_DATA[0]
  }
  getDefaultSelectedConverter(category: converterCategory): converter {
    return category.converters[0]
  }
  getCategoriesNames(): string[] {
    return CONVERTER_DATA.map(({ name }) => name)
  }
  getConvertersNames(category: converterCategory): string[] {
    return this.getConverters(category).map(({ name }) => name)
  }
  
  constructor() { }
}
