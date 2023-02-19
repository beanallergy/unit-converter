import { converterCategory } from './converterInterfaces';

export const CONVERTER_DATA: converterCategory[] = [
  {
    name: 'Distance',
    converters: [
      {
        input: "kilometer",
        output: "mile",
        rate: 0.6214
      },
      {
        input: "mile",
        output: "kilometer",
        rate: 1.6093
      }
    ]
  },
  {
    name: 'Weight',
    converters: [
      {
        input: "kilogram",
        output: "pound",
        rate: 2.2046
      },
      {
        input: "pound",
        output: "kilogram",
        rate: 0.4536
      },
    ]
  },
  {
    name: 'Volume',
    converters: [
      {
        input: "liter",
        output: "cup (US)",
        rate: 4.2268
      },
      {
        output: "liter",
        input: "cup (US)",
        rate: 0.2366
      },
      {
        input: "liter",
        output: "pint (UK)",
        rate: 1.7598
      },
      {
        output: "liter",
        input: "pint (UK)",
        rate: 0.5683
      }      
    ]
  }
]