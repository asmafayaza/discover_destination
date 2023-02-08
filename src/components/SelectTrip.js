import React from "react";
import PropTypes from "prop-types";
import { RadioInputContainer } from "../styles/SearchStyle";

const SelectTrip = (props) => {
    const selectOneWay = () => props.selectOneWay();
    const selectRoundTrip = () => props.selectRoundTrip();
    return (
        <RadioInputContainer>
            <div className="radio__container">
                {" "}
                <input
                    type="radio"
                    id="one_way"
                    name="flight_trip"
                    value="one_way"
                    defaultChecked
                    onClick={selectOneWay}
                />{" "}
                <h4 className="radioInputTitle">Single</h4>
            </div>
            <div className="radio__container">
                <input
                    type="radio"
                    id="round_trip"
                    name="flight_trip"
                    value="round_trip"
                    onClick={selectRoundTrip}
                />{" "}
                <h4 className="radioInputTitle">Return</h4>
            </div>
        </RadioInputContainer>
    );
};

export default SelectTrip;

SelectTrip.propTypes = {
    selectOneWay: PropTypes.func.isRequired,
    selectRoundTrip: PropTypes.func.isRequired,
};
