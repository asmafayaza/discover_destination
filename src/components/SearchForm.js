import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as flightSearchAction from "../actions";
import CityList from "../CityList.json";
import SelectTrip from "./SelectTrip";
import SelectCity from "./SelectCity";
import SelectDate from "./SelectDate";
import PassengerCount from "./PassengerCount";
import RefinePrice from "./RefinePrice";
import { FlightSearch } from "../styles/SearchStyle";
import moment from "moment";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originCityList: [],
            destinationCityList: [],
            showOriginCityList: false,
            showDestinationCityList: false,
            roundTrip: false,
            originCity: "",
            destinationCity: "",
            departureDate: moment(),
            returnDate: "",
            passengerCount: 1,
            price: {
                min: 1500,
                max: 10000,
            },
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.selectOneWay = this.selectOneWay.bind(this);
        this.selectRoundTrip = this.selectRoundTrip.bind(this);
        this.changeDepartureDate = this.changeDepartureDate.bind(this);
        this.changeReturnDate = this.changeReturnDate.bind(this);
        this.changePassengerCount = this.changePassengerCount.bind(this);
        this.filterByPrice = this.filterByPrice.bind(this);
        this.searchOriginCity = this.searchOriginCity.bind(this);
        this.selectOriginCity = this.selectOriginCity.bind(this);
        this.searchDestinationCity = this.searchDestinationCity.bind(this);
        this.selectDestinationCity = this.selectDestinationCity.bind(this);
    }

    searchOriginCity(searchTerm) {
        const originCityListCopy = CityList.City.slice();

        const filterdList = originCityListCopy.filter((city) =>
            city.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.setState({
            showOriginCityList: true,
            showDestinationCityList: false,
            originCityList: filterdList,
            destinationCityList: [],
        });
    }

    selectOriginCity(city) {
        this.setState({
            originCityList: [],
            showOriginCityList: false,
            showDestinationCityList: false,
            originCity: city.code,
        });
    }

    searchDestinationCity(searchTerm) {
        const destinationCityListCopy = CityList.City.slice();
        const filterdList = destinationCityListCopy.filter((city) => {
            return city.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        this.setState({
            showOriginCityList: false,
            originCityList: [],
            showDestinationCityList: true,
            destinationCityList: filterdList,
        });
    }

    selectDestinationCity(city) {
        this.setState({
            destinationCityList: [],
            showOriginCityList: false,
            showDestinationCityList: false,
            destinationCity: city.code,
        });
    }

    selectOneWay(e) {
        this.setState({ roundTrip: false, returnDate: "" });
    }

    selectRoundTrip(e) {
        this.setState((prevState) => ({
            roundTrip: true,
            returnDate: moment(prevState.departureDate).add(1, "day"),
        }));
    }

    changeDepartureDate(date) {
        this.setState((prevState) => ({
            departureDate: date,
            returnDate: prevState.roundTrip ? moment(date).add(1, "day") : "",
        }));
    }

    changeReturnDate(date) {
        this.setState({
            returnDate: date,
        });
    }

    changePassengerCount(event) {
        if (event.target.id === "reduceButton") {
            this.setState((prevState) => ({
                passengerCount: prevState.passengerCount - 1,
            }));
        } else if (event.target.id === "increaseButton") {
            this.setState((prevState) => ({
                passengerCount: prevState.passengerCount + 1,
            }));
        }
    }

    filterByPrice(newPrice) {
        this.setState({ price: newPrice });
    }

    handleSearch(event) {
        const {
            roundTrip,
            originCity,
            destinationCity,
            departureDate,
            returnDate,
            passengerCount,
            price,
        } = this.state;

        if (originCity && destinationCity && departureDate) {
            const payload = {
                searchId: Date.now(),
                roundTrip: roundTrip,
                originCity: originCity,
                destinationCity: destinationCity,
                departureDate: departureDate,
                returnDate: returnDate,
                passengerCount: passengerCount,
                price: price,
            };
            this.props.actions.searchFlight(payload);
        }

        event.preventDefault();
    }

    render() {
        const {
            originCityList,
            destinationCityList,
            showOriginCityList,
            showDestinationCityList,
            roundTrip,
            originCity,
            destinationCity,
            departureDate,
            returnDate,
            passengerCount,
            price,
        } = this.state;

        return (
            <FlightSearch>
                <form
                    name="flightSearchForm"
                    className="searchForm"
                    onSubmit={this.handleSearch}
                >
                    <SelectTrip
                        selectOneWay={this.selectOneWay}
                        selectRoundTrip={this.selectRoundTrip}
                    />
                    <div className="content-container">
                        <div className="city-container">
                            <SelectCity
                                originCityList={originCityList}
                                destinationCityList={destinationCityList}
                                showOriginCityList={showOriginCityList}
                                showDestinationCityList={
                                    showDestinationCityList
                                }
                                selectedOriginCity={originCity}
                                selectedDestinationCity={destinationCity}
                                searchOriginCity={this.searchOriginCity}
                                searchDestinationCity={
                                    this.searchDestinationCity
                                }
                                selectOriginCity={this.selectOriginCity}
                                selectDestinationCity={
                                    this.selectDestinationCity
                                }
                            />
                        </div>

                        <div>
                            <div className="date-container">
                                <SelectDate
                                    selectedDepartureDate={departureDate}
                                    changeDepartureDate={
                                        this.changeDepartureDate
                                    }
                                    selectedReturnDate={returnDate}
                                    changeReturnDate={this.changeReturnDate}
                                    roundTrip={roundTrip}
                                />
                            </div>
                            <div className="filter-container">
                                <div className="passenger-input">
                                    <PassengerCount
                                        maxPassenger={6}
                                        minPassenger={1}
                                        changePassengerCount={
                                            this.changePassengerCount
                                        }
                                        passengerCount={passengerCount}
                                    />
                                </div>
                                <div className="price-input">
                                    <RefinePrice
                                        maxValue={15000}
                                        minValue={1000}
                                        price={price}
                                        filterByPrice={this.filterByPrice}
                                    />
                                </div>
                                <div className="btn-wrapper">
                                    <input
                                        type="submit"
                                        className="search-btn"
                                        value="Search"
                                        name="search_flight"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </FlightSearch>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(flightSearchAction, dispatch),
});

export default connect(null, mapDispatchToProps)(SearchForm);
