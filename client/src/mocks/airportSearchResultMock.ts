import { IAirport } from '../interfaces/Airports';

export const airportSearchResultMock: IAirport[] = [
  {
    type: 'location',
    subType: 'AIRPORT',
    name: 'BRANDENBURG',
    detailedName: 'BERLIN/DE:BRANDENBURG',
    id: 'ABER',
    self: {
      href: 'https://test.api.amadeus.com/v1/reference-data/locations/ABER',
      methods: ['GET'],
    },
    timeZoneOffset: '+02:00',
    iataCode: 'BER',
    geoCode: {
      latitude: 52.36223,
      longitude: 13.50167,
    },
    address: {
      cityName: 'BERLIN',
      cityCode: 'BER',
      countryName: 'GERMANY',
      countryCode: 'DE',
      regionCode: 'EUROP',
    },
    analytics: {
      travelers: {
        score: 20,
      },
    },
  },
  {
    type: 'location',
    subType: 'AIRPORT',
    name: 'HAMBURG',
    detailedName: 'HAMBURG/DE:HAMBURG',
    id: 'AHAM',
    self: {
      href: 'https://test.api.amadeus.com/v1/reference-data/locations/AHAM',
      methods: ['GET'],
    },
    timeZoneOffset: '+02:00',
    iataCode: 'HAM',
    geoCode: {
      latitude: 53.63028,
      longitude: 9.98834,
    },
    address: {
      cityName: 'HAMBURG',
      cityCode: 'HAM',
      countryName: 'GERMANY',
      countryCode: 'DE',
      regionCode: 'EUROP',
    },
    analytics: {
      travelers: {
        score: 10,
      },
    },
  },
  {
    type: 'location',
    subType: 'AIRPORT',
    name: 'AUSTIN-BERGSTROM INTL',
    detailedName: 'AUSTIN/TX/US:AUSTIN-BERGSTROM',
    id: 'AAUS',
    self: {
      href: 'https://test.api.amadeus.com/v1/reference-data/locations/AAUS',
      methods: ['GET'],
    },
    timeZoneOffset: '-05:00',
    iataCode: 'AUS',
    geoCode: {
      latitude: 30.19445,
      longitude: -97.67,
    },
    address: {
      cityName: 'AUSTIN',
      cityCode: 'AUS',
      countryName: 'UNITED STATES OF AMERICA',
      countryCode: 'US',
      stateCode: 'TX',
      regionCode: 'NAMER',
    },
    analytics: {
      travelers: {
        score: 8,
      },
    },
  },
  {
    type: 'location',
    subType: 'AIRPORT',
    name: 'BERGAMO ORIO AL SERIO',
    detailedName: 'MILAN/IT:BERGAMO ORIO AL SERIO',
    id: 'ABGY',
    self: {
      href: 'https://test.api.amadeus.com/v1/reference-data/locations/ABGY',
      methods: ['GET'],
    },
    timeZoneOffset: '+02:00',
    iataCode: 'BGY',
    geoCode: {
      latitude: 45.67389,
      longitude: 9.70417,
    },
    address: {
      cityName: 'MILAN',
      cityCode: 'MIL',
      countryName: 'ITALY',
      countryCode: 'IT',
      regionCode: 'EUROP',
    },
    analytics: {
      travelers: {
        score: 7,
      },
    },
  },
];
