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

export interface Origin {
  type: string;
  subtype: string;
  name: string;
  iataCode: string;
}

export interface Destination {
  City: string;
  Country: string;
  Code: string;
}
