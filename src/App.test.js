import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SearchableCityList from './components/SearchableCityList';
import SearchForm from './components/SearchForm';
import SelectDate from './components/SelectDate';
import PassengerCount from './components/PassengerCount';
import reducer from './reducers';
import * as actions from './actions';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import moment from 'moment';

configure({ adapter: new Adapter() });

const initialState = {};
const mockStore = configureStore();
let store;
beforeEach(() => {
  store = mockStore(initialState)
 })

describe('App Render', () => {
  it('App should render correctly', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
})

 describe('SearchForm Render', () => {
   it('SearchForm(Connected Component) should render correctly', () => {
     const component = shallow(<SearchForm store={store}/>)

     expect(component).toMatchSnapshot();
   });
 })


 describe('Test DatePicker', () => {
 it('test should set new date on date change', () => {
     const now = moment();
     const changeDepartureDate = jest.fn();
     let departureDate;
     const wrapper = shallow(<SelectDate changeDepartureDate={changeDepartureDate} selectedDepartureDate={departureDate}/>);
     wrapper.find('.inputDate').first().prop('onChange')(now);
     expect(moment(departureDate).format()).toEqual(moment(now).format());
 });
});

  describe('Test City Selection', () => {
	  it('should call onChange prop', () => {
		const searchOriginCity = jest.fn();
		const event = {
		  target: { value: 'the-value' }
		};
		const component = shallow(<SearchableCityList searchCityList={searchOriginCity} />);
		component.find('.cityInput').first().simulate('change', event);
		expect(searchOriginCity).toBeCalledWith('the-value');
	  });
  })

  describe('Check Disable Button', () => {
    it('Button disable if Passenger more than 5', () => {
      const maxPassengerNo = 6;
      const passengerCount = 6;
      const changePassengerCount = jest.fn();
      const component = shallow(<PassengerCount maxPassenger={maxPassengerNo} passengerCount={passengerCount}/>);
      expect(component.find('#increaseButton').prop('disabled')).toEqual(true);
    });
  })

 describe('Test ActionCreator', () => {
   it('should return expected action', () => {
     const payload = {};
     const expectedAction = {
       type: 'SEARCH_FLIGHT',
       payload
     }
     expect(actions.searchFlight(payload)).toEqual(expectedAction);
   });
 })


 describe('Test Reducer', () => {
   it('should return FlightList', () => {
     const flightList = [
        {
           "id":101,
           "price":"4762",
           "code":"AI-206",
           "origin":"CCU",
           "destination":"BOM",
           "deptTime":"2018-09-27T19:00:00.000",
           "arrTime":"2018-09-27T21:30:00.000"
        },
        {
           "id":102,
           "price":"5064",
           "code":"6E-273",
           "origin":"BOM",
           "destination":"CCU",
           "deptTime":"2018-09-28T02:00:00.000",
           "arrTime":"2018-09-28T04:30:00.000"
        },
        {
           "id":103,
           "price":"4236",
           "code":"AI-204",
           "origin":"CCU",
           "destination":"BOM",
           "deptTime":"2018-09-28T05:00:00.000",
           "arrTime":"2018-09-28T07:30:00.000"
        }
      ]

      const searchString = {
        roundTrip: false,
        originCity: "CCU",
        destinationCity: "BOM",
        departureDate: "2018-09-28T05:00:00.000",
        returnDate: "",
        passengerCount: 1,
        price: {
          min: 1500,
          max: 7000,
        }
      }
      const startAction = {
        type: 'GET_LATEST_FLIGHT_RESULT',
        searchString,
        flightList
      };

      expect(reducer({}, startAction)).toEqual({loadStatus:1, upFlightList:[{
         "id":103,
         "price":"4236",
         "code":"AI-204",
         "origin":"CCU",
         "destination":"BOM",
         "deptTime":"2018-09-28T05:00:00.000",
         "arrTime":"2018-09-28T07:30:00.000"
      }], downFlightList:[]});
   });
 });
