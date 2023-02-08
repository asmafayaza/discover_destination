import React from "react";
import { ActionButtonWrapper } from "../styles/SearchStyle";

const PassengerCount = (props) => {
    const changePassengerCount = (e) => props.changePassengerCount(e);

    return (
        <ActionButtonWrapper>
            <div className="passenger-wrapper">
                <div className="passenger-title">
                    <h4 className="title">Passenger</h4>
                </div>
                <div className="passenger-button">
                    <button
                        id="reduceButton"
                        type="button"
                        className="button"
                        disabled={props.passengerCount <= props.minPassenger}
                        onClick={changePassengerCount}
                    >
                        -
                    </button>
                    <span className="passenger__count">
                        {props.passengerCount}{" "}
                    </span>
                    <button
                        id="increaseButton"
                        type="button"
                        className="button"
                        disabled={props.passengerCount >= props.maxPassenger}
                        onClick={changePassengerCount}
                    >
                        +
                    </button>
                </div>
            </div>
        </ActionButtonWrapper>
    );
};

export default PassengerCount;
