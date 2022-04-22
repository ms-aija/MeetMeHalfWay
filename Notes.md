Project Architecture:

1) Enter origin 1
2) Enter origin 2

3) Click search button
<!-- OPTION 1:
- Origin 1 and Origin 2 (airport iata codes) inputs get saved in origin airport state
- Upon update of origin state, useEffect fetches destination cities for each of the origin airports -->
OPTION 2:
- Fetch destination cities for each of origin airport codes (returns 2 arrays) (with promise.all to wait for both responses)
- Combine and filter array to get common destination cities
- Update destination cities state with result from previous


Cities list from https://www.nationsonline.org/oneworld/IATA_Codes/airport_code_list.htm
