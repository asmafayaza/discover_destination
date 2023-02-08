import moment from 'moment';

const initialState = {
  searchString: {},
  loadStatus: 1,
  upFlightList: [],
  downFlightList: []
};


const flightSearchReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SEARCH_FLIGHT': {
      return Object.assign({}, state, {loadStatus:0}, {searchString:action.payload} );
    }

    case 'GET_LATEST_FLIGHT_RESULT': {

      const allFlightList = action.flightList;

      let searchedFlightList = allFlightList.filter((flight) => {
        return ( (action.searchString.originCity.toLowerCase() === flight.origin.toLowerCase()) &&
          (action.searchString.destinationCity.toLowerCase() === flight.destination.toLowerCase()) &&
          (moment(action.searchString.departureDate).format('D M YYYY') === moment(flight.deptTime).format("D M YYYY")) &&
          (flight.price <= action.searchString.price.max && flight.price >= action.searchString.price.min)
        )
      });

      let returnFlightList = action.searchString.roundTrip ? (allFlightList.filter((flight) => {
        return (action.searchString.destinationCity.toLowerCase() === flight.origin.toLowerCase() &&
          action.searchString.originCity.toLowerCase() === flight.destination.toLowerCase() &&
          moment(action.searchString.returnDate).format('D M YYYY') === moment(flight.deptTime).format("D M YYYY") &&
          flight.price <= action.searchString.price.max && flight.price >= action.searchString.price.min)
      })) : [];


      return Object.assign({}, state, {loadStatus:1}, {upFlightList:searchedFlightList, downFlightList:returnFlightList} );
    }
    default:
      return state
  }
}

export default flightSearchReducer;
