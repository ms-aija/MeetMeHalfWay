import Amadeus from 'amadeus';

const amadeus = new (Amadeus as any)({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  hostname: 'test'
});

export default amadeus;