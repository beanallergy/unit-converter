import { Component, OnInit } from '@angular/core'
import { converter } from '../converterInterfaces'
import { convertersService } from '../converters.service'

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  currentConverter: converter

  constructor(private convertersService: convertersService) { }

  ngOnInit(): void {
    this.setDefaultConverter()
  }

  setDefaultConverter(): void {
    this.currentConverter = this.convertersService.getDefaultSelectedConverter(this.convertersService.getDefaultSelectedCategory())
  }

  setConverter(newConverter: converter) {
    this.currentConverter = newConverter
  }

}
