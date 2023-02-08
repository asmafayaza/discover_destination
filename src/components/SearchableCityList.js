import React, { Component } from "react";
import EachCityItem from "./EachCityItem";
import PropTypes from "prop-types";

class SearchableCityList extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedCity: "" };

        this.searchCityList = this.searchCityList.bind(this);
        this.selectCity = this.selectCity.bind(this);
        this.clearValue = this.clearValue.bind(this);
    }

    searchCityList(event) {
        this.setState({ selectedCity: event.target.value });
        this.props.searchCityList(event.target.value);
    }

    clearValue(event) {
        this.setState({ selectedCity: "" });
    }
    selectCity(city) {
        this.setState({ selectedCity: city.name });
        this.props.selectCity(city);
    }

    render() {
        const { selectedCity } = this.state;
        const { id, name, placeholder, showCityList, cityList } = this.props;

        return (
            <div className="container">
                <input
                    type="text"
                    name={name}
                    className="cityInput"
                    id={id}
                    value={selectedCity}
                    onChange={this.searchCityList}
                    placeholder={placeholder}
                    onBlur={this.clearValue}
                    autoComplete="true"
                    required
                />

                {showCityList && (
                    <ul className="list-unstyle city-list">
                        {cityList.length !== 0 &&
                            cityList.map((city) => (
                                <EachCityItem
                                    key={city.id}
                                    city={city}
                                    selectCity={this.selectCity}
                                />
                            ))}
                        {cityList.length === 0 && (
                            <li className="emptyMsg">No City Found</li>
                        )}
                    </ul>
                )}
            </div>
        );
    }
}

export default SearchableCityList;

SearchableCityList.propTypes = {
    cityList: PropTypes.array,
    searchCityList: PropTypes.func,
    selectCity: PropTypes.func,
    selectedCity: PropTypes.string,
    showCityList: PropTypes.bool,
};
