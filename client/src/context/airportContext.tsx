import { createContext, useState, useContext, useRef} from "react";
// import { IAirport } from "../interfaces/Airports";
import { IAirportInput } from "../interfaces/Airports";


interface IAirportSearchContext {
  origin1: IAirportInput,
  setOrigin1: React.Dispatch<React.SetStateAction<IAirportInput>>,
  origin2: IAirportInput,
  setOrigin2: React.Dispatch<React.SetStateAction<IAirportInput>>,
  origin3: IAirportInput,
  setOrigin3: React.Dispatch<React.SetStateAction<IAirportInput>>,
  count: React.MutableRefObject<number>
}

const AirportSearchContext = createContext<IAirportSearchContext | null>(null);

export default function AirportSearchProvider ({children}: {children: React.ReactNode}) {
  const [origin1, setOrigin1] = useState<IAirportInput>({visible: true, content: null});
  const [origin2, setOrigin2] = useState<IAirportInput>({visible: true, content: null});
  const [origin3, setOrigin3] = useState<IAirportInput>({visible: false, content: null});

  let count = useRef(2);


  return (
    <AirportSearchContext.Provider value={{
      origin1, setOrigin1,
      origin2, setOrigin2,
      origin3, setOrigin3,
      count
      }}>
      {children}
    </AirportSearchContext.Provider>
  )
};

export function useAirportSearch() {
  return useContext(AirportSearchContext);
}