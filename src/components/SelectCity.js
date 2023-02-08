import React, { Component } from "react";
import SearchableCityList from "./SearchableCityList";
import { CityField } from "../styles/SearchStyle";

export default class SelectCity extends Component {
    render() {
        const {
            originCityList,
            showOriginCityList,
            selectedOriginCity,
            searchOriginCity,
            selectOriginCity,
            destinationCityList,
            showDestinationCityList,
            selectedDestinationCity,
            searchDestinationCity,
            selectDestinationCity,
        } = this.props;

        return (
            <div className="city__container">
                <CityField>
                    <h4>Departure To</h4>
                    <SearchableCityList
                        id="oCity"
                        placeholder="From"
                        name="oCity"
                        cityList={originCityList}
                        showCityList={showOriginCityList}
                        selectedCity={selectedOriginCity}
                        searchCityList={searchOriginCity}
                        selectCity={selectOriginCity}
                    />

                    <h4>Arrival To</h4>
                    <SearchableCityList
                        id="dCity"
                        placeholder="To"
                        name="dCity"
                        cityList={destinationCityList}
                        showCityList={showDestinationCityList}
                        selectedCity={selectedDestinationCity}
                        searchCityList={searchDestinationCity}
                        selectCity={selectDestinationCity}
                    />
                </CityField>
            </div>
        );
    }
}
