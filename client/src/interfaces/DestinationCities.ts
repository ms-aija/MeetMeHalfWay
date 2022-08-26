// (1) Destination successful response type definition
interface AmadeusDestinationSelf {
  self: string
}

interface AmadeusDestinationMeta {
  origin: string
  count: number
  links: AmadeusDestinationSelf
}

export interface AmadeusDestinationCity {
  type: string
  subtype: string
  name: string
  iataCode: string
}
// Use this interface in code for destination result
export interface AmadeusDestinationResult {
  meta: AmadeusDestinationMeta
  data: AmadeusDestinationCity[]
}

// (2) Destination error response type definition
interface AmadeusDestinationErrorSource {
  parameter: string
  pointer: string
  example: string
}

export interface AmadeusDestinationError {
  status: number
  code: number
  title: string
  detail: string
  source: AmadeusDestinationErrorSource
}