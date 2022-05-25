export interface Airport {
  code: string
  lat: string
  lon: string
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
  runway_length?: string
  elev?: string
  icao?: string
  direct_flights?: string
  carriers?: string
}