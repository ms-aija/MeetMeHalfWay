export interface Airport {
  code: string
  lat: number
  lon: number
  name: string
  city: string
  state?: string | null
  country: string
  woeid?: string
  tz?: string
  phone?: string
  type?: string
  email?: string
  url?: string
  runway_length?: number
  elev?: number
  icao?: string
  direct_flights?: number
  carriers?: number
}

export interface IAirport {
  type: string,
  subType: string,
  name: string,
  detailedName: string,
  id: string,
  self: {
      href: string,
      methods: string[]
  },
  timeZoneOffset: string,
  iataCode: string,
  geoCode: {
      latitude: number,
      longitude: number
  },
  address: {
      cityName: string,
      cityCode: string,
      countryName: string,
      countryCode: string,
      regionCode: string
  },
  analytics?: {
      travelers: {
          score: number
      }
  }
}
