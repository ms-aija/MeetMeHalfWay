export interface Airport {
  code: string
  lat: number
  lon: number
  name: string
  city: string
  state: string | null
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