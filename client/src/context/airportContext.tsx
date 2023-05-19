import { createContext, useState, useContext} from "react";

import { IAirport } from "../interfaces/Airports";

interface IAirportSearchContext {
  airportInputs: IAirport[] | undefined;
  setAirportInputs: React.Dispatch<React.SetStateAction<IAirport[] | undefined>>
}

const AirportSearchContext = createContext<IAirportSearchContext | null>(null);

export default function AirportSearchProvider ({children}: {children: React.ReactNode}) {
  const [airportInputs, setAirportInputs] = useState<IAirport[] | undefined>();

  return (
    <AirportSearchContext.Provider value={{airportInputs, setAirportInputs}}>
      {children}
    </AirportSearchContext.Provider>
  )
};

export function useAirportSearch() {
  return useContext(AirportSearchContext);
}