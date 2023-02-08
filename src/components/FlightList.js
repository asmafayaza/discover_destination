import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as flightSearchAction from "../actions";
import FlightObject from "../flights.json";
import { Loader } from "../styles/Loader";
import FlightDetails from "./FlightDetails";
import { ListWrapper, FlightResult } from "../styles/FlightStyle";

class FlightList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allFlightList: [],
            flightSearch: false,
        };
    }

    componentWillMount() {
        const allFlightList = FlightObject.flights;
        this.setState({ allFlightList });
    }

    componentWillReceiveProps(newprops) {
        const { allFlightList } = this.state;
        const { searchString } = newprops;
        if (this.props.searchString.searchId !== searchString.searchId) {
            this.setState({ flightSearch: true });
            const searchedQuery = {
                roundTrip: searchString.roundTrip,
                originCity: searchString.originCity,
                destinationCity: searchString.destinationCity,
                departureDate: searchString.departureDate,
                returnDate: searchString.returnDate,
                price: searchString.price,
            };
            this.props.actions.getLatestFlightResult(
                searchedQuery,
                allFlightList
            );
        }
    }

    render() {
        const { upFlightList, downFlightList, loadStatus, searchString } =
            this.props;
        const { flightSearch } = this.state;

        return (
            <ListWrapper>
                {loadStatus === 1 && !flightSearch && (
                    <div className="emptyState">
                        <span>Search Flight</span>
                    </div>
                )}

                {loadStatus === 1 && flightSearch && (
                    <FlightResult>
                        <div className="fullWidth">
                            <h3 className="header">
                                {searchString.originCity} >{" "}
                                {searchString.destinationCity}
                            </h3>
                            {upFlightList.length !== 0 ? (
                                <ul className="list-unstyle reduce-padding">
                                    {upFlightList.map((flight, index) => {
                                        return (
                                            <FlightDetails
                                                key={flight.id}
                                                flight={flight}
                                                passengers={
                                                    searchString.passengerCount
                                                }
                                            />
                                        );
                                    })}
                                </ul>
                            ) : (
                                <li className="emptyState">
                                    <span>
                                        No Flight Found for Selected Date
                                    </span>{" "}
                                    <br />
                                    <span>Select any other day</span>
                                </li>
                            )}
                        </div>

                        {searchString.roundTrip && (
                            <div className="fullWidth">
                                <h3 className="header">
                                    {searchString.destinationCity} >{" "}
                                    {searchString.originCity}
                                </h3>

                                {downFlightList.length !== 0 ? (
                                    <ul className="list-unstyle reduce-padding">
                                        {downFlightList.map((flight, index) => {
                                            return (
                                                <FlightDetails
                                                    roundTrip
                                                    key={flight.id}
                                                    flight={flight}
                                                    passengers={
                                                        searchString.passengerCount
                                                    }
                                                />
                                            );
                                        })}
                                    </ul>
                                ) : (
                                    <li className="emptyState">
                                        <span>
                                            {" "}
                                            No Flight Found for Selected Date{" "}
                                        </span>{" "}
                                        <br />
                                        <span>Select any other day</span>
                                    </li>
                                )}
                            </div>
                        )}
                    </FlightResult>
                )}

                {loadStatus === 0 && (
                    <div className="relativeBlock">
                        <Loader large>
                            <span />
                        </Loader>
                    </div>
                )}
            </ListWrapper>
        );
    }
}

FlightList.propTypes = {
    searchString: PropTypes.object.isRequired,
    loadStatus: PropTypes.number.isRequired,
    upFlightList: PropTypes.array.isRequired,
    downFlightList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    searchString: state.searchString,
    loadStatus: state.loadStatus,
    upFlightList: state.upFlightList,
    downFlightList: state.downFlightList,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(flightSearchAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
