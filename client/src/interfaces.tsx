export interface Airports {
  code: string;
  name: string;
  city: string;
  state: string;
  country: string;
  direct_flights: string;
  lat: string;
  lon: string;
}

export interface Destination {
  type: string;
  subtype: string;
  name: string;
  iataCode: string;
}

export interface Origin {
  City: string;
  Country: string;
  Code: string;
}

export interface AirportLocation {
  code: string;
  name: string;
  lat: string;
  lon: string;
}
