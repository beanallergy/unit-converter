import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { converter, converterCategory } from '../converterInterfaces'
import { convertersService } from '../converters.service'

@Component({
  selector: 'app-converter-selection',
  templateUrl: './converter-selection.component.html',
  styleUrls: ['./converter-selection.component.html']
})
export class ConverterSelectionComponent implements OnInit {

  @Output() newConverterEvent = new EventEmitter<converter>()

  allCategories: converterCategory[]
  selectedCategory: converterCategory
  categoriesNames: string []
  convertersInCategory: converter[]
  selectedConverter: converter
  convertersNames: string []
  selectedCategoryString: string
  selectedConverterString: string

  constructor(private convertersService: convertersService) {  }

  ngOnInit(): void {
    this.getInitialData()
    this.updateConvertersList()
  }

  getInitialData(): void {
    this.allCategories = this.convertersService.getAllCategories()
    this.selectedCategory = this.convertersService.getDefaultSelectedCategory()
    this.selectedCategoryString = this.selectedCategory.name
    this.categoriesNames = this.convertersService.getCategoriesNames()
  }

  updateConvertersList(): void {
    this.convertersInCategory = this.convertersService.getConverters(this.selectedCategory)
    this.selectedConverter = this.convertersService.getDefaultSelectedConverter(this.selectedCategory)
    this.selectedConverterString = this.selectedConverter.name
    this.convertersNames = this.convertersService.getConvertersNames(this.selectedCategory)
  }
  
  setNewCategory(newCategoryName: string) {
    this.selectedCategoryString = newCategoryName
    this.selectedCategory = this.allCategories.find(category => category.name === newCategoryName)
    this.updateConvertersList()
    this.newConverterEvent.emit(this.selectedConverter);
  }

  setNewConverter(newConverterName: string) {
    this.selectedConverterString = newConverterName
    this.selectedConverter = this.convertersInCategory.find(converter => converter.name === newConverterName)
    this.newConverterEvent.emit(this.selectedConverter);
  }
}
