export interface converter {
  name?: string
  input: string
  output: string
  rate: number
}
export interface converterCategory {
  name: string
  converters: converter[]
}