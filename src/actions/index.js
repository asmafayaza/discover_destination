
export const searchFlight = (payload) => ({
  type: 'SEARCH_FLIGHT',
  payload
});

export const getLatestFlightResult = (searchString, flightList) => ({
  type: 'GET_LATEST_FLIGHT_RESULT',
  searchString,
  flightList
});
