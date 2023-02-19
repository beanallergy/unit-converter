import { Component, Input } from '@angular/core'
import { converter } from '../converterInterfaces'

@Component({
  selector: 'app-converter-calculation',
  styleUrls: ['./converter-calculation.component.css'],
  templateUrl: './converter-calculation.component.html'
})
export class ConverterCalculationComponent {
  @Input() converter: converter
  converterInput: number = 1
}