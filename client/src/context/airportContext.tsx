import { createContext, useState, useContext} from "react";
import { IAirport } from "../interfaces/Airports";


interface IAirportSearchContext {
  origins: (IAirport | null)[],
  setOrigins: React.Dispatch<React.SetStateAction<(IAirport | null)[]>>,
  destinationCities: IAirport[],
  setDestinationCities: React.Dispatch<React.SetStateAction<IAirport[]>>
}

const AirportSearchContext = createContext<IAirportSearchContext | null>(null);

export default function AirportSearchProvider ({children}: {children: React.ReactNode}) {
  const [origins, setOrigins] = useState<(IAirport | null)[]>([null, null]);
  const [destinationCities, setDestinationCities] = useState<IAirport[]>([]);

  console.log(origins.map(it => it?.name).join(','))
  return (
    <AirportSearchContext.Provider value={{
      origins, setOrigins,
      destinationCities, setDestinationCities
      }}>
      {children}
    </AirportSearchContext.Provider>
  )
};

export function useAirportSearch() {
  return useContext(AirportSearchContext);
}