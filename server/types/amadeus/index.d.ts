declare module 'amadeus' {

  // Destination successful response type definition
  interface AmadeusDestinationSelf {
    self: string
  }

  interface AmadeusDestinationMeta {
    origin: string
    count: number
    links: AmadeusDestinationSelf
  }

  interface AmadeusDestinationCity {
    type: string
    subtype: string
    name: string
    iataCode: string
  }

  interface AmadeusDestinationResult {
    meta: AmadeusDestinationMeta
    data: AmadeusDestinationCity[]
  }

  // Destination error response type definition
  interface AmadeusDestinationErrorSource {
    parameter: string
    pointer: string
    example: string
  }

  interface AmadeusDestinationError {
    status: number
    code: number
    title: string
    detail: string
    source: AmadeusDestinationErrorSource
  }
}
